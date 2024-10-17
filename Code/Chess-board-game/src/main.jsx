import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Componenets/Redux_store.jsx";
import Chess_board_game from "./Componenets/Chess_board_game.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Chess_board_game />
    </Provider>
  </StrictMode>
);
