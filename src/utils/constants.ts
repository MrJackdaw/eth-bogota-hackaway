import polygonLogo from "images/bclogo-polygon.png";
import moonbaseLogo from "images/bclogo-moonbeam.png";
import klaytnLogo from "images/bclogo-klaytn.png";
import optimismLogo from "images/bclogo-optimism.png";

// Storage Keys
export const ANNOUNCER_KEY = "dao-announcer";
export const DAO_ADDR_KEY = "dao-address";
export const EVM_CHAIN = "evm-chain";
const POLYGON = "Polygon";
const MOONBEAM = "Moonbase Alpha";
const KLAYTN = "Klaytn";
const OPTIMISM = "Optimism";
export const EVMProviders = [
  { name: "Polygon", value: POLYGON, src: polygonLogo },
  { name: "Moonbeam", value: MOONBEAM, src: moonbaseLogo },
  { name: "Klaytn (Baobab)", value: KLAYTN, src: klaytnLogo },
  { name: "Optimism (Testnet)", value: OPTIMISM, src: optimismLogo }
];
export const SupportedEVMs = EVMProviders.map(({ value }) => value);

// Values [mainly contract addresses, though you can change these]
export const DAO_ANNOUNCER = () => {
  switch (localStorage.getItem(EVM_CHAIN)) {
    case MOONBEAM:
      return "0x6F8C72BDFf42A1E2561c58da55D901Ba7938e3d4";
    case KLAYTN:
      return "0xd1B0c9e30A82FFEA5A8a052F3eCbf7DbE1108b36";
    case POLYGON:
      return "0xD22dF2a68ace2bCE8Cd5770C17a07615A4B4AA09";
    case OPTIMISM:
      return "0x6F8C72BDFf42A1E2561c58da55D901Ba7938e3d4";
    default:
      return "";
  }
};

export const EVMChainId = (name: string) => {
  switch (name) {
    case "Moonbase Alpha":
      return "0x507";
    case "Klaytn":
      return "0x3e9";
    case "Polygon": // Mumbai
      return "0x13881";
    case "Optimism": // Goerli
      return "0x1a4";
    default:
      return "0x0";
  }
};
