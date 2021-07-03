// src/components/UserProfile.js

import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

class UserProfile extends Component {
	render() {
		return (
			<div id="profile-container">
				<Nav></Nav>
				<div id="main">
					<div id="profile">
						<img alt="" src="/logo192.png" />
						<h1>
							{this.props.userObject.firstName} {this.props.userObject.lastName}
						</h1>
						<div>@{this.props.userName}</div>
						<div>Email {this.props.userObject.email}</div>
						<div>Phone {this.props.userObject.phone}</div>
						<div>Joined {this.props.memberSince}</div>
					</div>

				</div>
				<Footer></Footer>
			</div>
		);
	}
}

export default UserProfile;
