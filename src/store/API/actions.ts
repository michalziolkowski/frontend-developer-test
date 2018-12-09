// @ts-ignore
import { CacheManager } from "react-native-expo-image-cache";
import { ThunkDispatch } from "redux-thunk";
import api from "./api";

export const fetchUsers = () => async (
  dispatch: ThunkDispatch<any, any, any>
) => {
  return dispatch(api.fetchUsers());
};
