import { useEffect, useState } from "react";
import {
  disconnectUser,
  truncateString,
  checkSessionExists,
  ReachAccount
} from "@jackcom/reachduck";
// Views
import { resetNotifications, updateAsError, updateNotification } from "state";
import { subscribeToDAOs } from "reach/sdk";
import { addDAO } from "state/daos";
import Button, { RoundButton, WideButton } from "components/Forms/Button";
import Modal from "components/Common/Modal";
import { FlexColumn, GridContainer } from "components/Common/Containers";
import { connect, reconnect } from "reach";
import { useGlobalUser } from "hooks/GlobalUser";
import polygonLogo from "images/bclogo-polygon.png";
import moonbaseLogo from "images/bclogo-moonbeam.png";
import klaytnLogo from "images/bclogo-klaytn.png";
import ImageLoader from "components/Common/ImageLoader";
import { ANNOUNCER_KEY, DAO_ANNOUNCER, EVM_CHAIN } from "utils/constants";

const providers = [
  // { name: "My Algo", value: "MyAlgo" },
  // { name: "WalletConnect", value: "WalletConnect" }
  { name: "Polygon (Mumbai)", value: "Polygon", src: polygonLogo },
  { name: "Moonbeam (Testnet)", value: "Moonbase Alpha", src: moonbaseLogo },
  { name: "Klaytn (Baobab)", value: "Klaytn", src: klaytnLogo }
];

const ConnectWallet = () => {
  const { account, address, error, loading } = useGlobalUser();
  const [modal, showModal] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const { exists } = checkSessionExists();
  // Get all DAO registrations since the beginning of time
  const onUserConnected = (acc: ReachAccount) => {
    subscribeToDAOs(acc, {
      ctcAddress: DAO_ANNOUNCER(),
      onDAOReceived: addDAO
    });
  };
  const connectTo = async (prov = "") => {
    showModal(false);
    setConnecting(true);

    try {
      const acc = await connect(prov);
      if (!acc) throw new Error("Failed to connect");
      localStorage.setItem(EVM_CHAIN, prov);
      localStorage.setItem(ANNOUNCER_KEY, DAO_ANNOUNCER());
      onUserConnected(acc);
      const alertId = resetNotifications("⏳ Connecting ... ", true);
      updateNotification(alertId, "✅ Connected!");
    } catch (e: any) {
      const err = "❌ Account Fetch error";
      updateAsError(null, err, { error: err });
    }

    setConnecting(false);
  };
  const resumeSession = async () => {
    setConnecting(true);
    const alertId = resetNotifications("⏳ Reconnecting ... ");
    const chain = localStorage.getItem(EVM_CHAIN) || "Polygon";
    onUserConnected(await reconnect(chain));
    setConnecting(false);
    updateNotification(alertId, "✅ Connected!");
  };

  useEffect(() => {
    if (exists && !account) resumeSession();
  }, []);

  if (account)
    return <Button onClick={disconnectUser}>{truncateString(address)}</Button>;

  if (connecting)
    return (
      <Button disabled>
        <span className="spinner--before">Loading ...</span>
      </Button>
    );

  return (
    <>
      {error ? (
        <Button onClick={() => window.location.reload()}>
          <span className="material-icons">close</span>
          Connect Error
        </Button>
      ) : (
        // <Button onClick={() => showModal(true)}>
        <GridContainer columns="repeat(2, 1fr) max-content">
          {exists || connecting || loading ? (
            <span className="spinner--before">Loading ...</span>
          ) : (
            providers.map((p) => (
              <RoundButton
                disabled={loading || connecting}
                key={p.value}
                onClick={() => connectTo(p.value)}
              >
                <ImageLoader width={24} src={p.src} />
              </RoundButton>
            ))
          )}
        </GridContainer>
      )}

      {modal && (
        <Modal title="Select Wallet Provider" onClose={() => showModal(false)}>
          <FlexColumn style={{ alignSelf: "stretch", placeContent: "center" }}>
            {providers.map((p) => (
              <WideButton key={p.value} onClick={() => connectTo(p.value)}>
                <b>{p.name}</b>
              </WideButton>
            ))}
          </FlexColumn>
        </Modal>
      )}
    </>
  );
};

export default ConnectWallet;
