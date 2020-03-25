 import { userActionType } from "./user.types";

export const setCurrentUser = user => ({
  type: userActionType.SET_CURRENT_USER,
  payload: user
});

export default setCurrentUser;
