import React, { Component } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export class Debit extends Component {
  constructor(props) {
    super(props);
  }

  //   componentDidMount() {
  //     fetch("https://moj-api.herokuapp.com/debits")
  //       .then((response) => response.json())
  //       .then((data) => this.displayAPI(data));
  //   }

//   displayAPI() {
//     for (let i = 0; i < Object.keys(data).length; i++) {
//       document.querySelector("#debitList").innerHTML +=
//         "ID: " +
//         data[i].id +
//         "<br/>" +
//         "Description: " +
//         data[i].description +
//         "<br/>" +
//         "Amount: $" +
//         data[i].amount +
//         "<br/>" +
//         "Date: " +
//         data[i].date +
//         "<br/><hr/>";
//     }
//   }

  render() {
    return (
      <div>
        <Nav></Nav>
        <div id="main">
          <div id="Debit">
            <h1>Debit</h1>
            <div id="debitList">
              {this.props.debitInfo.map((x, index) => (
                <div key={index} style={{ border: "2px black solid" }}>
                  <p> Description: {x[0]}</p>
                  <p> Amount: ${x[1]} </p>
                  <p> Date: {x[2]} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Debit;
