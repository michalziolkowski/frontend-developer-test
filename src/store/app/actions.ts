// @ts-ignore
import { CacheManager } from "react-native-expo-image-cache";
import { ThunkDispatch } from "redux-thunk";
import ActionType from "./types";

export const switchTheme = () => async (
  dispatch: ThunkDispatch<any, any, any>
) => {
  dispatch({ type: ActionType.SWITCH_THEME });
};
