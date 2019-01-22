import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss";
// #region Import Styles

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
