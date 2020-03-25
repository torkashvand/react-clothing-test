import { userAction } from "./user-reducer";

export const setCurrentUser = user => ({
  type: userAction.SET_CURRENT_USER,
  payload: user
});

export default setCurrentUser;
