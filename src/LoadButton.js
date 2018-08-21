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

  componentDidMount() {
    document.getElementById('randomButton').click();
  }

	handleClick(event) {
		event.preventDefault();

		if (this.state.count !== 0 && this.state.entries.length !== 0) {
			let localIndex = Math.floor(Math.random() * this.state.count);
			this.setState({index: localIndex});
			this.setState({api: this.state.entries[localIndex].API});
			this.setState({description: this.state.entries[localIndex].Description});
			this.setState({link: this.state.entries[localIndex].Link});
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
				<button id="randomButton" onClick = {this.handleClick.bind(this)} class="button">Click Me!</button>
				<div class="box box-padding" id="buttonOutput">
					<h1><b>API: </b> {this.state.api}</h1>
					<h2><b>Description: </b> {this.state.description}</h2>
					<h2><b>Link: </b> <a href={this.state.link}>{this.state.link}</a></h2>
				</div>
			</div>
		);
	}
}

export default LoadButton;