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
  getBlockchain
} from "@jackcom/reachduck";
import {
  loadStdlib,
  ALGO_WalletConnect as WalletConnect
} from "@reach-sh/stdlib";
import MyAlgoConnect from "@randlabs/myalgo-connect";
import {
  ANNOUNCER_KEY,
  EVMChainId,
  EVM_CHAIN,
  SupportedEVMs
} from "utils/constants";

/** Connect user Wallet */
export async function connect(prov: string) {
  const done = async () => {
    configureWalletProvider(prov);
    const updates = await connectUser();
    store.multiple(updates);
    return updates.account;
  };

  // EVMs
  if (SupportedEVMs.includes(prov)) {
    // @ts-ignore
    const eth = window.ethereum;
    const requestedChainId = EVMChainId(prov);
    if (requestedChainId !== eth?.chainId) {
      try {
        localStorage.removeItem(ANNOUNCER_KEY);
        return await switchNetwork(prov, requestedChainId)
          .then(done)
          .catch((e) => {
            throw e;
          });
      } catch (e: any) {
        throw e;
      }
    }
  }

  return done();
}

/** Reconnect user session */
export async function reconnect(evmProvider?: string) {
  const { addr = undefined, isWCSession } = checkSessionExists();
  if (isWCSession || getBlockchain() === "ALGO") {
    configureWalletProvider(isWCSession ? "WalletConnect" : "MyAlgo");
    const updates = await reconnectUser(addr);
    store.multiple(updates);
    return updates.account;
  }

  // ETH/EVMs
  configureWalletProvider(evmProvider);
  const updates = await connectUser();
  store.multiple(updates);
  return updates.account;
}

/** Dissconnect user session */
export async function disconnect() {
  addNotification("Disconnecting ... ");
  store.reset();
  localStorage.removeItem(ANNOUNCER_KEY);
  localStorage.removeItem(EVM_CHAIN);
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

async function switchNetwork(name: string, chainId: string) {
  try {
    // @ts-ignore
    const eth = window.ethereum;
    await eth.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId }]
    });
  } catch (switchError: any) {
    const msg =
      switchError.code === 4902
        ? `${name} has not been added to MetaMask`
        : `Could not select network "${name}"`;
    addNotification(`❌ ${msg}`);
  }
}
