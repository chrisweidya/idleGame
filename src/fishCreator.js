import React from 'react';

//var instance = null;

class FishCreator {

	constructor() {
		console.log("Fish Creator initialized");
		this.areas = [
			"Little Pond",
			"Freeview River"
		]
		this.fishes = [
			[
				{
					name: "Angel Fish",
					type: "fish",
					health: 5,
					gold: 1
				},
				{
					name: "Gold Fish",
					type: "fish",
					health: 2,
					gold: 2
				},
				{
					name: "Black Molly",
					type: "fish",
					health: 8,
					gold: 2	
				},
				{
					name: "Black Skirt Tetra",
					type: "fish",
					health: 10,
					gold: 4
				},
				{
					name: "Kuhli Loach",
					type: "fish",
					health: 7,
					gold: 1
				},
				{
					name: "Betta",
					type: "fish",
					health: 4,
					gold: 1
				}
			],
			[
				{
					name: "Barracuda",
					type: "fish",
					health: 15,
					gold: 10
				}
			],
		];
	}

	getFish(tier) {
		tier -= 1;
		return this.fishes[tier][Math.floor(Math.random()*this.fishes[tier].length)];
	}

	getArea(tier) {
		tier -=1;
		return this.areas[tier];
	}

	getAreas() {
		return this.areas;
	}

	getAreasDropdownInfo() {
		let options = [
			{ value: 1, label: this.areas[0] },
			{ value: 2, label: this.areas[1] }
		]
		return options;
	}
}

const instance = new FishCreator();
Object.freeze(instance);

export default instance;