// src/components/UserProfile.js

import React, { Component } from "react";
import Nav from "./Nav";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <div id="profile">
          <img alt="" src="/logo192.png"/>
		  <h1>
            {this.props.userObject.firstName}{" "}
            {this.props.userObject.lastName}
          </h1>
          <div>@{this.props.userName}</div>
          <div>Email: {this.props.userObject.email}</div>
          <div>Phone: {this.props.userObject.phone}</div>
          <div>Member Since: {this.props.memberSince}</div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
