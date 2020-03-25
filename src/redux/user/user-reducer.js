const INITAL_STATE = {
  currentUser: null
};

export const userAction = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
};

const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case userAction.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
