import store, {
  addNotification,
  updateAsError,
  updateNotification
} from "state";
import {
  ReachAccount,
  ReachToken,
  connectUser,
  checkSessionExists,
  reconnectUser,
  disconnectUser,
  tokenMetadata as getReachToken,
  optInToAsset,
  loadReachWithOpts,
  ReachEnvOpts,
  getBlockchain,
  ConnectedUserData
} from "@jackcom/reachduck";
import {
  loadStdlib,
  ALGO_WalletConnect as WalletConnect
} from "@reach-sh/stdlib";
import MyAlgoConnect from "@randlabs/myalgo-connect";

/** Connect user Wallet */
export async function connect(provider: string) {
  configureWalletProvider(provider);
  const updates = await connectUser();
  store.multiple(updates);
  return updates.account;
}

/** Reconnect user session */
export async function reconnect() {
  const { addr = undefined, isWCSession } = checkSessionExists();
  if (isWCSession || getBlockchain() === "ALGO") {
    configureWalletProvider(isWCSession ? "WalletConnect" : "MyAlgo");
    const updates = await reconnectUser(addr);
    store.multiple(updates);
    return updates.account;
  }

  // ETH/EVMs
  configureWalletProvider();
  const updates = await connectUser();
  store.multiple(updates);
}

/** Dissconnect user session */
export async function disconnect() {
  store.reset();
  addNotification("Disconnecting ... ");
  disconnectUser();
}

/** Opt-in to an asset */
export async function inlineAssetOptIn(
  alertId: any,
  acc: ReachAccount,
  tokenId: any
) {
  updateNotification(alertId, `⭐️ Opt-in to token!`, true);

  const [asset, accepted] = await Promise.all([
    tokenMetadata(tokenId, acc),
    optInToAsset(acc, tokenId)
  ]);

  if (accepted) {
    const { assets } = store.getState();
    store.assets([...assets, asset]);
    updateNotification(alertId, `✅ Accepted Token`);
  } else updateAsError(alertId, `Asset opt-in failed!`);

  return accepted;
}

/**
 * Fetch asset details by ID (requires an account):
 * will also fetch user balance of token
 */
export async function tokenMetadata(
  token: any,
  acc: ReachAccount | null
): Promise<ReachToken> {
  if (!acc) return {} as ReachToken;
  const metadata = await getReachToken(token, acc);
  return metadata;
}

/** (Algorand) check whether a user has "opted-in" to a token */
export async function checkHasToken(token: any) {
  const { account } = store.getState();
  return account?.tokenAccepted(token) || Promise.resolve(false);
}

/** Initialize the `stdlib` instance according to the wallet provider. */
function configureWalletProvider(pr = "") {
  const opts: ReachEnvOpts = { chain: "ETH" };
  if (["WalletConnect", "MyAlgo"].includes(pr)) {
    switch (pr) {
      case "WalletConnect": {
        opts.walletFallback = { WalletConnect };
        break;
      }
      default:
        opts.walletFallback = { MyAlgoConnect };
        break;
    }
  }

  loadReachWithOpts(loadStdlib, opts);
}
