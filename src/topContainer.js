import React from 'react';
import Box from './box.js';

const topContainerClassName= "top container";

export default class TopContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			gold: 0,
			messages: ["fds", "fdsf", "fsd"]
		};
		this.messageSize = 3;
	}

	componentDidMount() {
	}

	addMessage(message) {
		if(this.state.messages.length >= 3) {
			this.state.messages.splice(0, 1);
			console.log(this.state.messages);
		}
		this.state.messages.push(message);
	}

	createMessages() {
		let messages;
		messages = this.state.messages.map((message, index)=> {
			return (<p key={index + "message"}>{message} </p>);
		});

		return messages;
	}

	createTopContainer() {
		return (
			<div className={topContainerClassName}>
				{this.createMessages()}
			</div>
		);
	}

	render() {
		return this.createTopContainer();
	}
}