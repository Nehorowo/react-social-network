let renderEntireTree = () => {
  console.log("State was changed!");
};

let state = {
  profilePage: {
    posts: [
      { id: "1", message: "salamakeikum", likesCount: 12 },
      { id: "2", message: "$NOK is goos", likesCount: 11 },
      { id: "3", message: "go to the moon", likesCount: 11 },
    ],
    newPostText: "it-kamasutra.com",
  },
  messagesPage: {
    messages: [
      { id: "1", message: "privet" },
      { id: "2", message: "yoyo" },
      { id: "3", message: "aloss" },
    ],
    dialogs: [
      { id: "1", name: "Dimych" },
      { id: "2", name: "Sawka" },
      { id: "3", name: "Olga" },
      { id: "4", name: "Alex" },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
};

export default state;
