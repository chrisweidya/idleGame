import React from 'react';
import FishCreator from './fishCreator.js';

const inventoryContainerClassName = "right container";
const fishItemClassName = "fish-item";

export default class InventoryContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			location: props.location,
			title: props.title,
			gold: 0,
			maxWeight: 5,
			currentWeight: 0,
			fishes: {}
		}
	}

	componentDidMount() {
		/*
		let fishes = this.state.fishes;
		fishes["Angel Fish"] = 2;
		this.setState({
			fishes: fishes
		})
		*/
	}

	componentWillReceiveProps(nextProps) {
	}

	sellFish(fishName, count) {
		let fishes = this.state.fishes;
		fishes[fishName] = 0;
		this.setState({
			fishes: fishes
		});
		this.updateGold(FishCreator.getFishGold(fishName)*count);
	}

	updateGold(val) {
		this.setState({
			gold: this.state.gold += val
		});
	}

	updateInventory(fish) {
		let fishes = this.state.fishes;
		if(!fishes[fish.name])
			fishes[fish.name] = 1;
		else
			fishes[fish.name] += 1;
		this.setState({
			fishes: fishes
		});
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
			if(fish[1] === 0)
				return;
			if(this.state.location === "fishing")
				return (
					<div key={fish[0] + fish[1]} className={fishItemClassName}>
						<p>{fish[0] + ": " + fish[1]}</p>
					</div>
				);
			else if(this.state.location === "market") 
				return (
					<div key={fish[0] + fish[1] + "button"} className={fishItemClassName}>
						<button onClick={this.sellFish.bind(this, fish[0], fish[1])}> {"Sell " + fish[1] + " " + fish[0]} </button>
					</div>
				);
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