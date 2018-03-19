import React, { Component } from 'react';
import './App.css';

class LoadButton extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
			entries: [],
			api: "",
			description: "",
			link: "",
		};
	}

	handleClick(event) {
		event.preventDefault();

		if (this.state.count !== 0 && this.state.entries !== []) {
			this.setState({index: Math.floor(Math.random() * this.state.count)});
			this.setState({api: this.state.entries[this.state.index].API});
			this.setState({description: this.state.entries[this.state.index].Description});
			this.setState({link: this.state.entries[this.state.index].Link});
		} else {
			fetch('https://api.publicapis.org/entries')
			.then(results => {
				return results.json();
			}).then(data => {
				this.setState({entries: data.entries});
				this.setState({count: data.count});
				this.setState({index: Math.floor(Math.random() * this.state.count)});
				this.setState({api: this.state.entries[this.state.index].API});
				this.setState({description: this.state.entries[this.state.index].Description});
				this.setState({link: this.state.entries[this.state.index].Link});
			});
		}
	}

	render() {
		return (
			<div>
				<button onClick = {this.handleClick.bind(this)} class="button">Click Me!</button>
				<div class="box box-padding" id="buttonOutput">
					<h1>{"API: " + this.state.api}</h1>
					<h2>{"Description: " + this.state.description}</h2>
					<h2>{"Link: " + this.state.link}</h2>
				</div>
			</div>
		);
	}
}

export default LoadButton;