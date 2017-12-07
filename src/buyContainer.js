import React from 'react';
import FishCreator from './fishCreator.js';

const buyContainerClassName = "middle container";
const fishItemClassName = "fish-item";

export default class BuyContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			location: props.location,
			title: props.title,
			cpGoldRequired: 5,

			minusGold: props.minusGold,
			increaseClickPower: props.increaseClickPower,
			updateMessage: props.updateMessage
		}
	}

	componentDidMount() {
	}

	componentWillReceiveProps(nextProps) {
	}

	createSuccessText() {
		this.state.updateMessage("Increased Strength.");
	}

	createFailureText() {
		this.state.updateMessage("Insufficient Gold.");
	}

	updateClickPower(val){
		if(this.state.minusGold(val)){
			this.state.increaseClickPower();
			this.createSuccessText();
			this.setState({
				cpGoldRequired: this.state.cpGoldRequired*= 2
			});
		}
		else {
			this.createFailureText();
		}

	}

	createShop() {
		return (
			<div key='middle' className={buyContainerClassName}>
				{this.createShopItems()}
			</div>
		)
	}

	createShopItems(){		
		return (
			<div key='power' className={fishItemClassName}>
				<button onClick={this.updateClickPower.bind(this, this.state.cpGoldRequired)}> {"+Str, Cost: " + this.state.cpGoldRequired} </button>
			</div>
		);
	}
	render() {
		return this.createShop();
	}
}