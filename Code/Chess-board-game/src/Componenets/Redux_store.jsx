import React from "react";
import { createStore } from "redux";

const initialState = {
  squares: Array(64)
    .fill()
    .map((_, index) => ({
      color: Math.floor(index / 8) % 2 === 0 ? "white" : "black",
      clickedcolor: null,
    })),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      const updatedSquares = state.squares.map((square, index) => {
        if (index === action.payload.index) {
          return {
            ...square,
            clickedcolor: square.color === "white" ? "yellow" : "red",
          };
        }
        return square;
      });
      return {
        ...state,
        squares: updatedSquares,
      };
    case "CLICKED_SQUARE":
      return {
        ...state,
        clickedSquare: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
