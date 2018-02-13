import React from 'react';
import Dropdown from 'react-dropdown';
import Box from './box.js';
import FishCreator from './fishCreator.js';

const fishingContainerClassName = "left container";

export default class FishingContainer extends React.Component {

	/*
	Slot Schema
	name:
	type:
	className:
	*/
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			clickPower: props.str,
			intervalDecrease: 1,
			slots: [],
			maxTier: 3,

			updateGold: props.updateGold,
			updateMessage: props.updateMessage,
			updateInventory: props.updateInventory
		}
		this.tier = 1;
	}

	componentDidMount() {
		this.initializeSlots();
		this.initializeArea();
	}

	componentWillReceiveProps(props) {
		console.log(props);
		this.setState({
			clickPower: props.str 
		});
	}

	getNextFish(killed) {
		if(killed) {
			this.state.updateInventory(this.state.slots[0]);
		}
		let nextFish = FishCreator.getFish(this.tier);
		this.state.slots[0] = nextFish;
		this.setState({
			slots: this.state.slots
		});
	}

	sendFishKilledMessage(fish, gold) {
		let message = "You got a " + fish + "! Sold it for " + gold + " gold.";
		this.state.updateMessage(message);
	}

	initializeSlots() {
		let slots = [];
		let nextFish = FishCreator.getFish(this.tier);
		slots.push(nextFish);
		this.setState({
			slots: slots
		});
		return slots;
	}

	initializeArea() {
		this.state.title = FishCreator.getArea(this.tier);
	}

	moveArea(tier) {
		console.log("tier: ", tier);
		this.tier = tier.value;
		this.setState({
			title: FishCreator.getArea(this.tier)
		});
		this.getNextFish(false);
	}

	insertBox(slots, slot){
		//slots.push(slot);
		return slots.push(slot);
	}


	//Rendering
	createBoxes() {
		const boxes = this.state.slots.map((slot, index) => {
			return (
				<Box 
					key={index + slot.type}
					index={index}
					name={slot.name}
					type={slot.type}
					health={slot.health}
					clickPower={this.state.clickPower}
					intervalDecrease={this.state.intervalDecrease} 
					getNextFish={this.getNextFish.bind(this)}
					>
				</Box>
			);
		});
		return boxes;
	}

	createAreaDropdown() {
		if(this.state.maxTier === 1)
			return;
		let areas = FishCreator.getAreasDropdownInfo(this.state.maxTier);
		return (
			<Dropdown className="dropdown" options={areas} onChange={this.moveArea.bind(this)} value={FishCreator.getArea(this.tier)} placeholder="Select an option" />
		);
	}

	createLeftContainer() {
		return (
			<div key={this.state.title} className={fishingContainerClassName}> 
				<h2>{this.state.title}</h2> 
				{this.createBoxes()}
				{this.createAreaDropdown()}
			</div>
		);
	}

	render() {
		return this.createLeftContainer();
	}
}