import React, { Component } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export class Credit extends Component {
  componentDidMount() {
    fetch("https://moj-api.herokuapp.com/credits")
      .then((response) => response.json())
      .then((data) => this.displayAPI(data));
  }

  displayAPI(data) {
    for (let i = 0; i < Object.keys(data).length; i++) {
      document.querySelector("#creditList").innerHTML +=
        "ID: " +
        data[i].id +
        "<br/>" +
        "Description: " +
        data[i].description +
        "<br/>" +
        "Amount: $" +
        data[i].amount +
        "<br/>" +
        "Date: " +
        data[i].date +
        "<br/><hr/>";
    }
  }

  render() {
    return (
      <div>
        <Nav></Nav>
        <div id="main">
          <div id="Credit">
            <h1>Credit</h1>
            <button onClick={this.displayInput}>Add Credit</button>
            <div id="input"></div>
            <div id="creditList"></div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Credit;
