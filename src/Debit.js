import React, { Component } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export class Debit extends Component {
  componentDidMount() {
    fetch("https://moj-api.herokuapp.com/debits")
      .then((response) => response.json())
      .then((data) => this.displayAPI(data));
  }

  displayAPI(data) {
    for(let i=0; i<Object.keys(data).length; i++){
        document.querySelector("#debitList")
        .innerHTML += "ID: " + data[i].id + "<br/>"
        + "Description: " + data[i].description + "<br/>"
        + "Amount: $" + data[i].amount + "<br/>"
        + "Date: " + data[i].date + "<br/><hr/>";
    }
  }

  render() {
    return (
      <div>
        <Nav></Nav>
        <div id="main">
          <div id="Debit">
            <h1>Debit</h1>
            <div id="debitList"></div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Debit;
