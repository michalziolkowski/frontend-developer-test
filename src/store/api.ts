// @ts-ignore
import { RSAA } from "redux-api-middleware";
import { config } from "../resources/config";

const FETCH_USERS_REQUEST = "request-users";
const FETCH_USERS_RECEIVE = "receive-users";
const FETCH_USERS_FAILURE = "failure-users";

export const ActionType = {
  FETCH_USERS_FAILURE,
  FETCH_USERS_RECEIVE,
  FETCH_USERS_REQUEST
};

const fetchUsersEndpoint = config.endpoint;

const fetchUsers = () => ({
  [RSAA]: {
    endpoint: fetchUsersEndpoint,
    method: "GET",
    headers: { "session-token": config.apiSessionToken },
    types: [FETCH_USERS_REQUEST, FETCH_USERS_RECEIVE, FETCH_USERS_FAILURE]
  }
});

export default { fetchUsers };
