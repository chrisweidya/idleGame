import React from 'react';
import Box from './box.js';
import TopContainer from './topContainer.js';
import InventoryContainer from './inventoryContainer.js';
import VerticalContainer from './verticalContainer.js';

const mainContainerClassName = "main container"

export default class MainContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			gold: 0
		}
	}

	componentDidMount() {
	}

	updateGold(val) {
		console.log("fsaf", this.state.gold);
		this.setState({
			gold: this.state.gold + val
		});
	}

	updateMessage(message) {
		this.refs.topContainer.addMessage(message);
	}

	updateInventory(fish) {
		let updated = this.refs.inventory.updateInventory(fish);
	}

	createMainContainer() {
		return (
			<div className={mainContainerClassName}>
				<TopContainer ref="topContainer">
				</TopContainer>
				<VerticalContainer ref="verticalContainer" updateGold={this.updateGold.bind(this)} updateMessage={this.updateMessage.bind(this)} updateInventory={this.updateInventory.bind(this)}>
				</VerticalContainer>
				<InventoryContainer ref="inventory" title={"Items"} className="right container" gold={this.state.gold}>
				</InventoryContainer>
			</div>
		);
	}

	render() {
		return this.createMainContainer();
	}
}