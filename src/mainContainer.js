import React from 'react';
import store from './redux/store';
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
	}

	createMainContainer() {
		return (
			<div className={mainContainerClassName}>
				<TopContainer>
				</TopContainer>
				<FishingContainer>
				</FishingContainer>
				<BuyContainer>
				</BuyContainer>
				<InventoryContainer>
				</InventoryContainer>
			</div>
		);
	}

	render() {
		return this.createMainContainer();
	}
}