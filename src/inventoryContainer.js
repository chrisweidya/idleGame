import React from 'react';
import Box from './box.js';

const inventoryContainerClassName = "right container";

export default class InventoryContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			gold: props.gold
		}
	}

	componentDidMount() {
	}

	componentWillReceiveProps(nextProps) {
		console.log("hi", nextProps.gold);
		this.setState({
			gold: nextProps.gold
		});
	}

	createInventoryContainer() {
		return (
			<div key={this.state.title} className={inventoryContainerClassName}> 
				<h2>{this.state.title}</h2> 
				{this.createResourceList()}
			</div>
		);
	}

	createResourceList() {
		let resource = [];
		if(this.state.gold != null) {
			let goldElement = (<h4 key="gold">Gold: {this.state.gold}</h4>);
			resource.push(goldElement);
		}
		console.log(resource + "lol");
		return resource;
	}
	render() {
		return this.createInventoryContainer();
	}
}