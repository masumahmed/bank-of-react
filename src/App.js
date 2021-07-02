// src/App.js

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./Login";
import Credit from "./Credit";
import Debit from "./Debit";

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: "joe_shmo",
        firstName: "Joe",
        lastName: "Shmo",
        email: "JoeShmo@example.com",
        phone: "555-555-5555",
        memberSince: "07/23/1996",
      },
    };
  }

  render() {
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userObject={this.state.currentUser}
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );
    const DebitComponent = () => <Debit />;
    const CreditComponent = () => <Credit />;
    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    );

    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/debit" render={DebitComponent} />
          <Route exact path="/credit" render={CreditComponent} />
          <Route exact path="/login" render={LogInComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
