// src/components/Home.js

import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Nav } from "./Nav";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div id="main">
          <AccountBalance accountBalance={this.props.accountBalance} />
        </div>
		<Footer></Footer>
      </div>
    );
  }
}

export default Home;
