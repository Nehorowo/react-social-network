import { getAuthUserData } from "./authReducer";

const INIT_SUCCESS = "INIT-SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return state;
  }
};

export const initSuccess = () => ({
  type: INIT_SUCCESS,
});

export const initApp = () => async (dispatch) => {
  await dispatch(getAuthUserData());
  dispatch(initSuccess());
};

export default appReducer;
