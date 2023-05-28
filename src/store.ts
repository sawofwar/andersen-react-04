import { configureStore } from "@reduxjs/toolkit";

const reducer = (state = 0, action: { type: string }) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

const store = configureStore({ reducer });

export default store;
