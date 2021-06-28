// src/components/Home.js

import React, { Component } from "react";
import AccountBalance from "./AccountBalance";

class Home extends Component {
  render() {
    return (
      <div>
        <div id="nav">
          <img src="logo192.png" id="logo" alt="bank" />
          <h1>Bank of React</h1>
        </div>

        <AccountBalance accountBalance={this.props.accountBalance} />
      </div>
    );
  }
}

export default Home;
