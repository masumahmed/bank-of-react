// src/components/Nav.js

import React, { Component } from "react";
import {Link} from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
      <div id="nav">
        <img src="logo192.png" id="logo" alt="bank" />
        <h1>Bank of React</h1>
        <Link to="/userProfile">User Profile</Link>
      </div>
    );
  }
}

export default Nav;
