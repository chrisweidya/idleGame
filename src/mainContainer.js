import React from 'react';
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

export default class MainContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			location: locations.market
		}
	}

	componentDidMount() {
	}

	updateGold(val) {
		this.refs.inventory.updateGold(val);
	}

	updateMessage(message) {
		this.refs.topContainer.addMessage(message);
	}

	updateInventory(fish) {
		let updated = this.refs.inventory.updateInventory(fish);
	}

	minusGold(val){
		return this.refs.inventory.minusGold(val);
	}

	increaseClickPower() {
		this.refs.fishingContainer.increaseClickPower();
	}

	createMainContainer() {
		return (
			<div className={mainContainerClassName}>
				<TopContainer ref="topContainer">
				</TopContainer>
				<FishingContainer ref="fishingContainer" updateGold={this.updateGold.bind(this)} updateMessage={this.updateMessage.bind(this)} updateInventory={this.updateInventory.bind(this)}>
				</FishingContainer>
				<BuyContainer ref="BuyContainer" minusGold={this.minusGold.bind(this)} increaseClickPower={this.increaseClickPower.bind(this)} updateMessage={this.updateMessage.bind(this)}>
				</BuyContainer>
				<InventoryContainer ref="inventory" title={"Items"} className="right container" location={this.state.location} updateMessage={this.updateMessage.bind(this)}>
				</InventoryContainer>
			</div>
		);
	}

	render() {
		return this.createMainContainer();
	}
}