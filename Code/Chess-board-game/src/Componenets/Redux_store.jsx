import React from "react";
import { createStore } from "redux";

const initialState = {
  squares: Array(64)
    .fill()
    .map((_, index) => {
      const row = Math.floor(index / 8);
      const col = index % 8;
      const isWhite = (row + col) % 2 === 0;
      return {
        color: isWhite ? "white" : "black",
        clickedcolor: null,
      };
    }),
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
