import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "salamakeikum", likesCount: 12 },
        { id: "2", message: "$NOK is goos", likesCount: 11 },
        { id: "3", message: "go to the moon", likesCount: 11 },
      ],
      newPostText: "",
    },
    messagesPage: {
      dialogs: [
        { id: "1", name: "Dimych" },
        { id: "2", name: "Sawka" },
        { id: "3", name: "Olga" },
        { id: "4", name: "Alex" },
      ],
      messages: [
        { id: "1", message: "privet" },
        { id: "2", message: "yoyo" },
        { id: "3", message: "aloss" },
      ],
      newMessageBody: "",
    },
  },
  _callSubscriber() {
    console.log("State was changed!");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
