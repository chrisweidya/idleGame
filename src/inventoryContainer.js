import React from 'react';
import {connect} from 'react-redux';
import FishCreator from './fishCreator.js';

const inventoryContainerClassName = "right container";
const fishItemClassName = "fish-item";

const mapStateToProps = state => {
	return {
		gold: state.stats.gold,
		caughtFishes: state.caughtFishes
	};
}
class ConnectedInventoryContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			location: props.location,
			title: props.title,
			gold: props.gold,
			maxWeight: 5,
			currentWeight: 0,
			caughtFishes: props.caughtFishes,

			updateMessage: props.updateMessage
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

	componentWillReceiveProps(props) {
		this.state.gold = props.gold;
		this.state.caughtFishes = props.caughtFishes;
	}

	sellFish(fishName, count) {
		let caughtFishes = this.state.caughtFishes;
		caughtFishes[fishName] = 0;
		this.setState({
			caughtFishes: caughtFishes
		});
		this.updateGold(FishCreator.getFishGold(fishName)*count);
	}

	updateGold(val) {
		//this.setState({
			//gold: this.state.gold += val
		//});
	}

/*
	minusGold(val) {
		if(this.state.gold >= val) {
			this.setState({
				gold: this.state.gold -= val
			});
			return true;
		}
		else
			return false;
	}
*/

	updateInventory(fish) {
		/*
		this.state.updateMessage("You received 1 " + fish.name + ".");
		let fishes = this.state.fishes;
		if(!fishes[fish.name])
			fishes[fish.name] = 1;
		else
			fishes[fish.name] += 1;
		this.setState({
			fishes: fishes
		});
		*/
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
		let caughtFishes = Object.entries(this.state.caughtFishes);
		caughtFishes = caughtFishes.map((fish, index) => {
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
		return caughtFishes;
	}

	render() {
		return this.createInventoryContainer();
	}
}

const InventoryContainer = connect(mapStateToProps) (ConnectedInventoryContainer);
export default InventoryContainer;