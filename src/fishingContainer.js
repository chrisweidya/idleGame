import React from 'react';
import {connect} from 'react-redux';
import {changeLocation} from './redux/actions';
import {resetFish} from './redux/actions';
import Dropdown from 'react-dropdown';
import Box from './box.js';
import FishCreator from './fishCreator.js';

const fishingContainerClassName = "left container";

const mapStateToProps = state => {
	return {
		location: state.location.currLocation,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeLocation: tier => dispatch(changeLocation(tier)),
		resetFish: () => dispatch(resetFish())
	}
}

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
			intervalDecrease: 1,
			slots: []
		}
	}

	componentDidMount() {
		this.initializeSlots();
		this.initializeArea();
	}

	componentWillReceiveProps(nextProps) {
		this.state.title = nextProps.location;
	}
/*
	getNextFish(killed) {
		if(killed) {
			this.props.catchFish(this.state.fish);
		}
		
		let nextFish = FishCreator.getFish(this.state.tier);
		this.state.slots[0] = nextFish;
		this.setState({
			slots: this.state.slots
		});
	}
	*/

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
		/*
		console.log("tier: ", tier);
		this.tier = tier.value;
		this.setState({
			title: FishCreator.getArea(this.state.tier)
		});
		this.getNextFish(false);
		*/
		this.props.changeLocation(tier.value);
		this.props.resetFish();
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
			<Box>
			</Box>
		)
		return boxes;
	}

	createAreaDropdown() {
		if(this.state.maxTier === 1)
			return;
		let areas = FishCreator.getAreasDropdownInfo(this.state.maxTier);
		return (
			<Dropdown className="dropdown" options={areas} onChange={this.moveArea.bind(this)} value={this.state.title} placeholder="Select an option" />
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

const FishingContainer = connect(mapStateToProps, mapDispatchToProps) (ConnectedFishingContainer);
export default FishingContainer;