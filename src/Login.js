// Login.js
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        userName: "",
        password: "",
      },
      redirect: false,
    };
  }

  handleChange = (e) => {
    const updatedUser = { ...this.state.user };
    const inputField = e.target.name;
    const inputValue = e.target.value;
    updatedUser[inputField] = inputValue;

    this.setState({ user: updatedUser });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.mockLogIn(this.state.user);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/userProfile" />;
    }

    return (
      <div id="Login">
        <Nav></Nav>
        <div id="main">
          <form onSubmit={this.handleSubmit}>
            <div>
              <h4>Username</h4>
              <input
                type="text"
                name="userName"
                onChange={this.handleChange}
                value={this.state.user.userName}
              />
            </div>
            <div>
              <h4>Password</h4>
              <input type="password" name="password" />
            </div>
            <button>Log In</button>
            <button>Sign Up</button>
          </form>
        </div>
		<Footer></Footer>
      </div>
    );
  }
}

export default LogIn;
