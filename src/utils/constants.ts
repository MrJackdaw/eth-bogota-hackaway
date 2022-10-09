// Storage Keys
export const ANNOUNCER_KEY = "dao-announcer";
export const DAO_ADDR_KEY = "dao-address";
export const EVM_CHAIN = "evm-chain";
export const SupportedEVMs = ["Polygon", "Moonbase Alpha"];

// Values [mainly contract addresses, though you can change these]
export const DAO_ANNOUNCER = () => {
  switch (localStorage.getItem(EVM_CHAIN)) {
    case "Moonbase Alpha":
      return "0x6F8C72BDFf42A1E2561c58da55D901Ba7938e3d4";
    case "Polygon":
      return "0xD22dF2a68ace2bCE8Cd5770C17a07615A4B4AA09";
    default:
      return "";
  }
};;

export const EVMChainId = (name: string) => {
  switch (name) {
    case "Moonbase Alpha":
      return "0x507";
    case "Polygon":
      return "0x13881";
    default: // Polygon Mumbai
      return "0x0";
  }
};