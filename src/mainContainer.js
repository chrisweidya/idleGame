import React from 'react';
import store from './redux/store';
import Box from './box.js';
import TopContainer from './topContainer.js';
import InventoryContainer from './inventoryContainer.js';
import VerticalContainer from './verticalContainer.js';
import FishingContainer from './FishingContainer.js';
import BuyContainer from './BuyContainer.js';

const mainContainerClassName = "main container";
const locations = {
	fishing: "fishing",
	market: "market"
};

const stats = {
	str: 1,
	strCost: 5,
	gold: 10
};

const INSUFFICIENT_GOLD_MESSAGE = "Insufficient Gold.";
const INCREASE_STR_MESSAGE = "Increased Strength.";

export default class MainContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			location: locations.market,
			stats: stats
		}
	}

	componentDidMount() {
	}

	updateGold(val) {
		this.refs.inventory.updateGold(val);
	}

	updateMessage(message) {
		//this.refs.topContainer.addMessage(message);
	}

	updateInventory(fish) {
		//let updated = this.refs.inventory.updateInventory(fish);
	}

	minusGold(val){
		if(this.state.stats.gold >= val)
			this.setState({
				stats: {
					gold: this.state.stats.gold - val
				}
			});

		//return this.refs.inventory.minusGold(val);
	}

	increaseClickPower() {
		if(this.state.stats.gold >= this.state.stats.strCost) {
			this.minusGold(this.state.stats.strCost);
			this.updateMessage(INCREASE_STR_MESSAGE);			
			this.setState({
				stats: {
					str: this.state.stats.str + 1,
					strCost: this.state.stats.strCost * 2	
				}
			});
		}
		else {
			this.updateMessage(INSUFFICIENT_GOLD_MESSAGE);
		}
		//this.refs.fishingContainer.increaseClickPower();
	}

	createMainContainer() {
		return (
			<div className={mainContainerClassName}>
				<TopContainer>
				</TopContainer>
				<FishingContainer ref="fishingContainer" updateGold={this.updateGold.bind(this)} str={this.state.stats.str} updateMessage={this.updateMessage.bind(this)} updateInventory={this.updateInventory.bind(this)}>
				</FishingContainer>
				<BuyContainer ref="BuyContainer" >
				</BuyContainer>
				<InventoryContainer ref="inventory" title={"Items"} className="right container" gold={this.state.stats.gold} location={this.state.location} updateMessage={this.updateMessage.bind(this)}>
				</InventoryContainer>
			</div>
		);
	}

	render() {
		return this.createMainContainer();
	}
}