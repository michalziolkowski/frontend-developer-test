import { combineReducers } from "redux";
import { IUser } from "../resources/model";
import LogUtils from "../utils/LogUtils";
import { ActionType } from "./api";

const INITIAL_STATE = {
  users: new Map<string, IUser>(),
  isLoading: false,
  error: undefined
};

// @ts-ignore TODO
const apiReducer = (state = INITIAL_STATE, action) => {
  let newState = state;
  let isAPIAction = true;

  switch (action.type) {
    case ActionType.FETCH_USERS_RECEIVE:
      const usersMap = new Map<string, IUser>();

      action.payload.data.forEach((user: IUser, index: number) => {
        user.localId = `${user.id}-${index}`;
        usersMap.set(user.localId, user);
      });

      newState = { ...state, isLoading: false, users: usersMap };
      break;
    case ActionType.FETCH_USERS_FAILURE:
      newState = { ...state, isLoading: false, error: action.payload };
      break;
    case ActionType.FETCH_USERS_REQUEST:
      newState = { ...state, isLoading: true };
      break;
    default:
      isAPIAction = false;
  }

  if (isAPIAction) {
    LogUtils.log("APIReducer", `Received action: ${action.type}`);
  }
  return newState;
};

export default combineReducers({
  api: apiReducer
});
