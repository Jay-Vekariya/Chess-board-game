import React from "react";
import { createStore } from "redux";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
