import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { RoomProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <RoomProvider>
        <App />
    </RoomProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to s tart measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
