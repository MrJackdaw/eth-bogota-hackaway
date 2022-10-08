// import { DefaultTheme } from "styled-components";

export const ConnectionPropKeys = ["address", "error", "loading", "account"];

export type ConnectionProps = {
  address?: string;
  error?: string | any | null;
  loading?: boolean;
  account?: any | null;
};

export type AllocateFunds = string & "AllocateFunds";
export type ChangeDAOState = string & "ChangeAdmin";
export type EjectMember = string & "EjectMember";
export type None = string & "None";
export type Stop = string & "Stop";
export type VoteActionType = string & ("For" | "Against");

export type ChangeDAOStateProp = {
  admin: string;
  fee: any;
  quorum: any;
  registerSelf: boolean;
  openTreasury: boolean;
};

export type Vote = [VoteActionType, null];
export type ProposalType =
  | AllocateFunds
  | ChangeDAOState
  | EjectMember
  | None
  | Stop;
export type ProposalAction =
  | [AllocateFunds, [string, any]]
  | [ChangeDAOState, ChangeDAOStateProp]
  | [EjectMember, string]
  | [None | Stop, null];

export type UIThemeType = "Dark" | "Light";

declare module "styled-components" {
  type DefaultSizes = {
    xxs?: string;
    xs?: string;
    sm: string;
    default?: string;
    md: string;
    lg: string;
    xlg: string;
    xxlg?: string;
  };

  export interface DefaultTheme {
    sizes: DefaultSizes;

    colors: {
      accent: string;
      bgColor: string;
      bgGradient?: string;
      semitransparent: string;
      error: string;
      primary: string;
      secondary: string;
      warning: string;
    };

    presets: {
      elevated: DefaultSizes;
      rounded: DefaultSizes;
    };
  }
}
