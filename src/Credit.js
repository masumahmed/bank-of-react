import React, { Component } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AccountBalance from "./components/AccountBalance";

export class Credit extends Component {
	render() {
		return (
			<div>
				<Nav></Nav>
				<div id="main">
					<div id="home">
						<h1>Account Overview</h1>
						<AccountBalance accountBalance={this.props.accountBalance} />
					</div>
					<div id="Credit">
						<h1>Credit</h1>
						<input placeholder="Description" type="text"></input>
						<input placeholder="amount" type="text"></input>
						<button onClick={this.addCredit}>Add Credit</button>
						<div id="input"></div>
						<div id="creditList">
							{this.props.creditInfo.map((x, index) => (
								<div key={index}>
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

export default Credit;
