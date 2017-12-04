import React from 'react';
import Box from './box.js';

const inventoryContainerClassName = "right container";

export default class InventoryContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			gold: props.gold,
			maxWeight: 5,
			currentWeight: 0,
			fishes: {}
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

	updateInventory(fish) {
		let fishes = this.state.fishes;
		if(!fishes[fish.name])
			fishes[fish.name] = 1;
		else
			fishes[fish.name] += 1;
	}

	createInventoryContainer() {
		return (
			<div key={this.state.title} className={inventoryContainerClassName}> 
				<h2>{this.state.title}</h2> 
				{this.createGoldText()}
				{this.createFishList()}
			</div>
		);
	}

	createGoldText() {		
		if(this.state.gold != null) {
			return (<h4 key="gold">Gold: {this.state.gold}</h4>);
		}
	}

	createFishList() {
		let fishes = Object.entries(this.state.fishes);
		fishes = fishes.map((fish, index) => {
			return (<p key={fish[0] + fish[1]}> {fish[0] + ": " + fish[1]}</p>);
		});
		return fishes;
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