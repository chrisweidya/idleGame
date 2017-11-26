import React from 'react';
import Box from './box.js';  

export default class VerticalContainer extends React.Component {

	/*
	Slot Schema
	title:
	type:
	className:
	*/
	constructor(props) {
		super(props);		
		this.state = {
			title: props.title,
			className: props.className,
			slots: []
		}
		this.insertBox(null);
	}

	insertBox(slot){
		//slots.push(slot);
		this.state.slots.push(
			{
				title: "Chickn",
				type: "chicken",
				className: "box"
			}
		);
	}

	createBoxes() {
		const boxes = this.state.slots.map((slot, index) => {
			return (
				<Box key={index + ". " + slot.title} title={index + ". " + slot.title} type={slot.type} className={slot.className}></Box>
			);
		});
		return boxes;
	}

	createLeftContainer() {
		return (
			<div key={this.state.title} className={this.state.className}> 
				<h3>{this.state.title}</h3> 
				{this.createBoxes()}
			</div>
		);
	}

	render() {
		return this.createLeftContainer();
	}
}