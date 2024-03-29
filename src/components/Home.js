// src/components/Home.js

import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Nav } from "./Nav";
import Footer from "./Footer";

class Home extends Component {
	render() {
		return (
			<div>
				<Nav />
				<div id="main">
					<div id="home">
						<h1>Account Overview</h1>
						<AccountBalance
							accountBalance={this.state.accountBalance}
							debitAmount={this.state.debitAmount}
							creditAmount={this.state.creditAmount}

						/>
					</div>
				</div>
				<Footer></Footer>
			</div>
		);
	}
}

export default Home;
