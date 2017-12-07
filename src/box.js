import React from 'react';
import Progress from 'react-progressbar';

const barBgClassName = "bar-bg";

export default class Box extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			type: props.type,
			name: props.name,
			index: props.index,
			className: "box",
			startTime: Date.now(), //unused
			cooldown: 60, //unused
			interval: 2000,
			health: props.health,
			currentHealth: props.health,
			fillAmount: 100,
			clickPower: props.clickPower,
			intervalDecrease: props.intervalDecrease,
			increaseClickPower: props.increaseClickPower,
			getNextFish: props.getNextFish,
			number: 0 //unused
		}
	}

	componentDidMount() {
		console.log("mounted");
		setInterval(this.updateProgressBar.bind(this), this.state.interval);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			name: nextProps.name,
			type: nextProps.type,
			health: nextProps.health,
			currentHealth: nextProps.health,
			clickPower: nextProps.clickPower
		});		
	}

	createBoxElement() {
		let boxElement = (
			<div className={this.state.className}> 
				<h4>{this.state.name}</h4>
				{this.createButton()} 
				{this.createProgressBar()}
			</div>
		);
		return boxElement;
	}

	createProgressBar() {
		//if(this.state.progressTimer === null)
		//	return;
		console.log("draw", this.state.fillAmount);
		return (
			<div className={barBgClassName}>
				<Progress completed={this.state.fillAmount} />
			</div>
		);
	}

	updateProgressBar(clickPower) {
		if(this.state.currentHealth <= 0)
			return;
		if(!clickPower)
			clickPower = this.state.clickPower;
		console.log(this.state.currentHealth);
		this.state.currentHealth -= clickPower;
		if(this.state.currentHealth <= 0) {
			this.setState({fillAmount: 0});
			this.handleDeadFish();
		}
		else {
			this.setState({fillAmount: this.state.currentHealth/this.state.health*100});
		}
	}

	handleDeadFish() {				
		setTimeout(this.state.getNextFish.bind(this, true), 300);
	}

	buttonClicked() {
		//this.state.increaseClickPower();
		this.updateProgressBar(this.state.clickPower);
	}

	createButton() {
		return (
			<button onClick={this.buttonClicked.bind(this)}> 
			Reel
			</button>
		);
	}	

	render() {
		return this.createBoxElement();
	}
}