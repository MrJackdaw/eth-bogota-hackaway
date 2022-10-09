import { DateTime } from "luxon";
import { version } from "../../package.json";

export const noOp = () => null;

export const APP_VERSION = version;
const APP_VERSION_KEY = "app-version";

/** App Migration helper: check if your app version has changed */
export async function checkVersionChanged() {
  const currentVersion = APP_VERSION;
  const lastVersion = localStorage.getItem(APP_VERSION_KEY);
  return currentVersion !== lastVersion;
}
const min = 60;
const hr = min * 60;
const day = hr * 24;
const yr = day * 365;

export function timeAgo(seconds: number) {
  const ts = DateTime.fromSeconds(seconds);
  const tsAgo = ts.diffNow("seconds", { conversionAccuracy: "longterm" });
  const time = Math.abs(tsAgo.as("seconds"));

  switch (true) {
    case time >= yr:
    case time >= day:
      return ts.toFormat("yyyy LL dd");
    case time >= hr:
      return `~${Math.round(time / hr)} hr(s) ago`;
    case time >= min:
      return `~${Math.round(time / min)} min(s) ago`;
    default:
      return `~${Math.round(time / min)}s ago`;
  }
}
