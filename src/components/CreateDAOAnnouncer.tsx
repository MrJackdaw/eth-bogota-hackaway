import { noOp } from "@jackcom/reachduck";
import useGlobalUser from "hooks/GlobalUser";
import { createAnnouncerContract } from "reach/sdk";
import { useMemo, useState } from "react";
import { ANNOUNCER_KEY } from "utils/constants";
import { WideButton } from "./Forms/Button";
import { FormDesc } from "./Forms/Form";

type CreateProps = {
  onCreate?: (add: string) => any;
  onError?: (add: string) => any;
};

export const CreateDAOAnnouncer = (props: CreateProps) => {
  const { onCreate = noOp, onError = noOp } = props;
  const { account } = useGlobalUser();
  const [error, setError] = useState("");
  const stored = useMemo(
    () => localStorage.getItem(ANNOUNCER_KEY),
    [account, props]
  );
  const onSubmit = async () => {
    const ctc = await createAnnouncerContract(account);
    if (ctc === null) {
      const e = "Contract creation failed";
      setError(e);
      onError(e);
    } else {
      localStorage.setItem(ANNOUNCER_KEY, ctc);
      onCreate(ctc);
    }
  };

  return stored ? (
    <></>
  ) : (
    <section>
      <WideButton onClick={onSubmit} type="button">
        Create Announcer
      </WideButton>
      {!error && <FormDesc>This should only happen once</FormDesc>}
      {error && <FormDesc>{error}</FormDesc>}
    </section>
  );
};

export default CreateDAOAnnouncer;
