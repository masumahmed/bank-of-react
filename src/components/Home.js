// src/components/Home.js

import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import {Nav} from "./Nav";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <AccountBalance accountBalance={this.props.accountBalance} />
      </div>
    );
  }
}

export default Home;
