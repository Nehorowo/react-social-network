import { getAuthUserData } from "./authReducer";

const SET_INITIALIZED = "SET-USER-DATA";
const SET_INIT_SUCCESS = "SET-INIT-SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return state;
  }
};

export const setInitSuccess = () => ({ type: SET_INIT_SUCCESS });

export const initializeApp = () => async (dispatch) => {
  await dispatch(getAuthUserData());
  dispatch(setInitSuccess());
};

export default appReducer;
