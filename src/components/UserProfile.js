// src/components/UserProfile.js

import React, {Component} from 'react';
import Nav from './Nav';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <Nav></Nav>
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
        </div>
    );
  }
}

export default UserProfile;
