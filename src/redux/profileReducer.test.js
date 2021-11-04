import profileReducer, { addPostActionCreator, deletePostActionCreator } from "./profileReducer";

let state = {
  posts: [
    { id: "1", message: "salamakeikum", likesCount: 12 },
    { id: "2", message: "$NOK is goos", likesCount: 11 },
    { id: "3", message: "go to the moon", likesCount: 11 },
  ],
};

it("check the message", () => {
  // 1. Test data
  let action = addPostActionCreator("nice test!");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[3].message).toBe("nice test!");
});

it("length of posts", () => {
  // 1. Test data
  let action = addPostActionCreator("nice test!");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});

it("length of array should be decreased after deleting post", () => {
  // 1. Test data
  let action = deletePostActionCreator(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(2);
});

it("length of array shouldn`t be decreased after deleting post if postIs isn`t correct", () => {
  // 1. Test data
  let action = deletePostActionCreator(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});
