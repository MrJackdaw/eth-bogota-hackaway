import styled, { css } from "styled-components";
import { useMemo, useState } from "react";
// import useGlobalModal from "hooks/globalModal";
import useGlobalUser from "hooks/GlobalUser";
import { WideButton } from "components/Forms/Button";
import { Fieldset, Form, Input, Legend, Textarea } from "components/Forms/Form";
import { Radio } from "components/Forms/Radio";
import { FlexColumn, GridContainer } from "./Common/Containers";
import { CreateDAOOpts } from "reach/sdk";

const animHide = "slide-up-fade-out";
const animShow = "slide-down-fade-in";
const fieldsetCSS = css`
  > ${Input} {
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 80%;
  }
`;
const FormDesc = styled.p<{ hide?: boolean }>`
  animation: ${({ hide }) => (hide ? animHide : animShow)};
  transition: height 350ms linear;
  height: ${({ hide }) => (hide ? 0 : "auto")};
  overflow: hidden;
`;
const FieldGrid = styled(Fieldset)`
  display: grid;
  gap: 0.4rem;
  grid-template-columns: repeat(2, 1fr);
  ${fieldsetCSS}
  ${FormDesc} {
    grid-column: 1 / grid-column-end;
  }
`;
const Fields = styled(Fieldset)`
  display: flex;
  flex-direction: column;
  ${fieldsetCSS}
`;

type FormProps = { onSubmit(d: CreateDAOOpts): any; showTitle?: boolean };

const QUORUM_DEFAULT = 3;

export default function CreateDaoForm(props: FormProps) {
  const { onSubmit, showTitle = false } = props;
  //   const { showModal, MODAL } = useGlobalModal();
  const { address } = useGlobalUser();
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [fee, setFee] = useState("0");
  const [openTreasury, setOpenTreasury] = useState(false);
  const [registerSelf, setRegisterSelf] = useState(true);
  const formData = useMemo<CreateDAOOpts>(
    () => ({
      announcerCtc: localStorage.getItem("dao-announcer") || "",
      name,
      description,
      fee,
      openTreasury,
      quorum: QUORUM_DEFAULT,
      registerSelf
    }),
    [name, fee, openTreasury, description, registerSelf]
  );
  const submitText = useMemo(
    () => (address ? "Create DAO" : "Connect to begin"),
    [address]
  );
  const isInvalid = useMemo(
    () => !address || !name.length || !description.length,
    [name, address, description]
  );
  const onFee = (f: string) => setFee(Math.max(Number(f), 0).toString());
  const maybeSubmit = async (): Promise<void> => {
    if (isInvalid) return;
    if (!address) {
      //   showModal(MODAL.PROVIDER_SELECT);
    } else onSubmit(formData);
  };

  return (
    <section>
      {showTitle && <h2>Create a DAO</h2>}

      <FormDesc hide={!address}>
        Enter <b>public information</b> about your DAO. This will be stored
        on-chain.
      </FormDesc>

      <Form onSubmit={(e) => e.preventDefault()}>
        <Fields disabled={!address}>
          <Legend>Organization Name</Legend>
          <Input
            placeholder="My Awesome DAO"
            maxLength={128}
            onChange={({ target }) => setName(target.value)}
          />

          <Textarea
            onChange={({ target }) => setDesc(target.value)}
            placeholder="Enter a description (max-length 512 characters)"
            maxLength={256}
          />
        </Fields>

        <FieldGrid disabled={!address}>
          <FlexColumn>
            <h4>Membership Fee</h4>
            <Input
              type="number"
              min={0}
              pattern="0-9"
              placeholder="(Leave blank for free membership)"
              onChange={({ target }) => onFee(target.value)}
            />
          </FlexColumn>

          <FlexColumn>
            <h4>Voting Quorum</h4>

            <Input
              type="number"
              min={0}
              pattern="0-9"
              placeholder="(Leave blank for free membership)"
              value={QUORUM_DEFAULT}
              disabled
            />
          </FlexColumn>

          {address && (
            <FormDesc>
              Your <b>voting quorum</b> determines the minimum number of votes
              required to auto-resolve a <b>Governance Proposal</b>. It starts
              at <b>{QUORUM_DEFAULT}</b> and can be changed by a{" "}
              <b>Governance Proposal</b>.
            </FormDesc>
          )}
        </FieldGrid>

        <Fields disabled={!address}>
          <Legend>Allow self-registration?</Legend>

          <GridContainer columns="repeat(2, 1fr)">
            <Radio
              name="selfRegister"
              onChange={() => setRegisterSelf(true)}
              checked={registerSelf}
            >
              <span>Yes</span>
            </Radio>

            <Radio
              name="selfRegister"
              onChange={() => setRegisterSelf(false)}
              checked={!registerSelf}
            >
              <span>No</span>
            </Radio>
          </GridContainer>

          <FormDesc hide={!address}>
            <b>Self-Registration</b> is
            {registerSelf
              ? ` enabled: non-members can join by paying the registration fee (if any).`
              : ` disabled: only existing members can pay for/add new members.`}
          </FormDesc>
        </Fields>

        <Fields disabled={!address}>
          <Legend>
            Allow <b>open-treasury</b>
          </Legend>

          <GridContainer columns="repeat(2, 1fr)">
            <Radio
              name="setOpenTreasury"
              checked={openTreasury}
              onChange={() => setOpenTreasury(true)}
            >
              <span>Yes</span>
            </Radio>

            <Radio
              name="setOpenTreasury"
              checked={!openTreasury}
              onChange={() => setOpenTreasury(false)}
            >
              <span>No</span>
            </Radio>
          </GridContainer>

          <FormDesc hide={!address}>
            {openTreasury ? (
              <>
                An <b>Open Treasury</b> allows a non-member to request a
                fund-allocation from the DAO treasury.
              </>
            ) : (
              <>
                <b>Closed Treasury:</b> only members are allowed to request
                funds from the treasury
              </>
            )}
          </FormDesc>
        </Fields>

        <WideButton type="button" disabled={isInvalid} onClick={maybeSubmit}>
          <b>{submitText}</b>
        </WideButton>
      </Form>
    </section>
  );
}
