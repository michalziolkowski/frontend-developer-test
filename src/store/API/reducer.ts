import { IUser } from "../../resources/model";
import LogUtils from "../../utils/LogUtils";
import { ActionType } from "./api";

const INITIAL_STATE = {
  users: new Map<string, IUser>()
};

// @ts-ignore TODO
export default (state = INITIAL_STATE, action) => {
  let newState = state;
  let isAPIAction = true;

  switch (action.type) {
    case ActionType.FETCH_USERS_RECEIVE:
      const usersMap = new Map<string, IUser>();

      action.payload.data.forEach((user: IUser, index: number) => {
        user.localId = `${user.id}-${index}`;
        usersMap.set(user.localId, user);
      });

      newState = { ...state, users: usersMap };
      break;
    case ActionType.FETCH_USERS_FAILURE:
      break;
    case ActionType.FETCH_USERS_REQUEST:
      break;
    default:
      isAPIAction = false;
  }

  if (isAPIAction) {
    LogUtils.log("APIReducer", `Received action: ${action.type}`);
  }
  return newState;
};
