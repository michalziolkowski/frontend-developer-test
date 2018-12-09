import LogUtils from "../../utils/LogUtils";
import ActionType from "./types";

interface IAppState {
  theme: "light" | "dark";
}

const INITIAL_STATE: IAppState = {
  theme: "light"
};

// @ts-ignore TODO
export default (state = INITIAL_STATE, action) => {
  let newState = state;
  let isAppAction = true;

  switch (action.type) {
    case ActionType.SWITCH_THEME:
      newState = {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      };
      break;
    default:
      isAppAction = false;
  }

  if (isAppAction) {
    LogUtils.log("AppReducer", `Received action: ${action.type}`);
    if (action.payload) {
      LogUtils.log("Action payload", action.payload);
    }
  }
  return newState;
};
