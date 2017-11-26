import React from 'react';
import Progress from 'react-progressbar';

const barBgClassName = "bar-bg";

export default class Box extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			type: props.type,
			title: props.title,
			className: props.className,
			startTime: Date.now(),
			cooldown: 60,
			progress: 0,
			fillAmount: 0,
			interval: 10,
			number: 0
		}
	}

	componentDidMount() {
		console.log("mounted");
		setInterval(this.updateProgressBar.bind(this), 1000);
	}

	createBoxElement() {
		let boxElement = (
			<div className={this.state.className}> 
				<h3>Please?</h3>
				{this.createButton()} 
				{this.createProgressBar()}
			</div>
		);
		return boxElement;
	}

	createProgressBar() {
		//if(this.state.progressTimer === null)
		//	return;
		return (
			<div className={barBgClassName}>
				<Progress completed={this.state.fillAmount} />
			</div>
		);
	}

	updateProgressBar() {
		console.log(this.state.progress);
		this.state.progress++;
		if(this.state.progress>=this.state.cooldown) {
			this.state.progress = 0;
		}
		this.setState({fillAmount: this.state.progress/this.state.cooldown*100});
	}



	step(timestamp) {
		if(!this.state.startTime)
			this.state.startTime = timestamp;
		let progress = timestamp - this.state.startTime;
		if(progress > this.state.progressTimer)
			this.state.startTime += this.state.progressTimer;
		let fillAmount = progress%this.state.progressTimer/this.state.progressTimer *100;
		this.setState({fillAmount: fillAmount});
		console.log(fillAmount);	
		window.requestAnimationFrame(this.step.bind(this));
	}

	buttonClicked() {
		this.state.number++;
		console.log(this.state.number);
	}

	createButton() {
		return (
			<button onClick={this.buttonClicked.bind(this)}> 
			CLick 
			</button>
		);
	}	

	render() {
		return this.createBoxElement();
	}
}