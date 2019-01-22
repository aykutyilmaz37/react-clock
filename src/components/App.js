import React, { Component } from "react";

// #region Import Styles
import "bootstrap/dist/css/bootstrap.min.css";
// #endregion

// #region Import Views Jsx
import Layout from "../layout/Layout";
import Clock from "./Clock";
// #endregion

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Clock />
      </Layout>
    );
  }
}
