import React, { Component } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AccountBalance from "./components/AccountBalance";

export class Debit extends Component {
	constructor(props) {
		super(props);

		this.state = {
			description: '',
			amount: ''
		};

		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleAmountChange = this.handleAmountChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleDescriptionChange = (event) => {
		this.setState({
			description: event.target.value
		});
	}

	handleAmountChange = (event) => {
		this.setState({
			amount: event.target.value
		});
	}

	randomString = (length, chars) => {
		var result = '';
		for (var i = 0; i<length; i++) {
			if(i === 8 || i === 12 || i === 16 || i === 20)
				result+= '-'
			result += chars[Math.floor(Math.random() * chars.length)];
		}
		return result;
	}

	handleSubmit(event) {
		// base case if one or more field is empty
		if (this.state.description === "" || this.state.amount === ""){
			alert("one or more fields are empty");
			return;
		}

		event.preventDefault();
		let description = this.state.description;
		let amount = this.state.amount;
		let obj = this.props.debitInfo;

		let d = new Date();
		let timeString = d.getFullYear() + "-" + (d.getMonth() < 10 ? "0" + d.getMonth(): d.getMonth()) + "-" + (d.getDate() < 10 ? "0" + d.getDate(): d.getDate()) + "T";
		timeString +=  (d.getHours() < 10 ? "0" + d.getHours(): d.getHours()) + ":" +  (d.getMinutes() < 10 ? "0" + d.getMinutes(): d.getMinutes()) + ":" +  (d.getSeconds() < 10 ? "0" + d.getSeconds(): d.getSeconds()) + ":" +  (d.getMilliseconds() < 10 ? "0" + d.getMilliseconds(): d.getMilliseconds()) + "Z";

		let randID = this.randomString(32, '0123456789abcdefghijklmnopqrstuvwxyz');

		let temp = {
			"id": randID,
			"description": description,
			"amount": amount,
			"date": timeString
		};

		obj.unshift(temp);

		this.setState({
			debitInfo: obj
		});

		this.setState({
			description: "",
			amount: ""
		})
	}

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
						<form onSubmit={this.handleSubmit}>
							<input
								placeholder="description"
								value={this.state.description}
								onChange={this.handleDescriptionChange}
								type="text"
							/>
							<input
								placeholder="amount"
								value={this.state.amount}
								onChange={this.handleAmountChange}
								type="text"
							/>
							<input type="submit" value="Add Debit" />
						</form>
						<div id="debitList">
							{this.props.debitInfo.map((x, index) => (
								<div key={index} >
									<p> ID: {x.id}</p>
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
