import React, { Component } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AccountBalance from "./components/AccountBalance";

export class Debit extends Component {
	render() {
		return (
			<div>
				<Nav></Nav>
				<div id="main">
					<div id="home">
						<h1>Account Overview</h1>
						<AccountBalance accountBalance={this.props.accountBalance} />
					</div>
					<div id="Debit">
						<h1>Debit</h1>
						<input placeholder="Description" type="text"></input>
						<input placeholder="amount" type="text"></input>
						<button onClick={this.addCredit}>Add Debit</button>
						<div id="debitList">
							{this.props.debitInfo.map((x, index) => (
								<div key={index} >
									<p> Description: {x.description}</p>
									<p> Amount: ${x.amount} </p>
									<p> Date: {x.date} </p>
									<hr />
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
