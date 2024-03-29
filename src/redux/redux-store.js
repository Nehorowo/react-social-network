import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

const store = createStore(
  reducers,
  /* preloadedState, */ composeWithDevTools(
    applyMiddleware(thunkMiddleware)
    // other store enhancers if any
  )
);

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
