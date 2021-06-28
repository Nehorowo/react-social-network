import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/redux-store";
import "./index.css";
import App from "./App";
import { Provider } from "./StoreContext";

let renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
