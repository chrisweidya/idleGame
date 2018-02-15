import React from 'react';
import {connect} from 'react-redux';
import Dropdown from 'react-dropdown';
import Box from './box.js';
import FishCreator from './fishCreator.js';

const fishingContainerClassName = "left container";

const mapStateToProps = state => {
	return {
		location: state.location.currLocation,
		tier: state.location.tier,
		fish: state.fish
	};
};

const mapDispatchToProps = dispatch => ({
});

class ConnectedFishingContainer extends React.Component {

	/*
	Slot Schema
	name:
	type:
	className:
	*/
	constructor(props) {
		super(props);
		this.state = {
			title: props.location,
			clickPower: props.str,
			intervalDecrease: 1,
			slots: [],
			fish: props.fish,
			tier: props.tier,

			updateGold: props.updateGold,
			updateMessage: props.updateMessage,
			updateInventory: props.updateInventory
		}
	}

	componentDidMount() {
		this.initializeSlots();
		this.initializeArea();
	}

	componentWillReceiveProps(nextProps) {
		this.state.location = nextProps.location;
		this.state.tier = nextProps.tier;
		this.state.fish = nextProps.fish;
		console.log(props);
		this.setState({
			clickPower: props.str 
		});
	}

	getNextFish(killed) {
		if(killed) {
			this.state.updateInventory(this.state.fish);
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
		/*
		let slots = [];
		let nextFish = FishCreator.getFish(this.state.tier);
		slots.push(nextFish);
		this.setState({
			slots: slots
		});
		return slots;
		*/
	}

	initializeArea() {
		this.state.title = FishCreator.getArea(this.state.tier);
	}

	moveArea(tier) {
		console.log("tier: ", tier);
		this.tier = tier.value;
		this.setState({
			title: FishCreator.getArea(this.state.tier)
		});
		this.getNextFish(false);
	}

	insertBox(slots, slot){
		//slots.push(slot);
		return slots.push(slot);
	}


	//Rendering
	createBoxes() {
		/*
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
		*/
		const boxes = (
				<Box 
					name={this.state.fish.name}
					type={this.state.fish.type}
					health={this.state.fish.health}
					clickPower={this.state.clickPower}
					intervalDecrease={this.state.intervalDecrease} 
					getNextFish={this.getNextFish.bind(this)}
					>
				</Box>
			)
		return boxes;
	}

	createAreaDropdown() {
		if(this.state.maxTier === 1)
			return;
		let areas = FishCreator.getAreasDropdownInfo(this.state.maxTier);
		return (
			<Dropdown className="dropdown" options={areas} onChange={this.moveArea.bind(this)} value={this.state.location} placeholder="Select an option" />
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

const FishingContainer = connect(mapStateToProps) (ConnectedFishingContainer);
export default FishingContainer;