const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
