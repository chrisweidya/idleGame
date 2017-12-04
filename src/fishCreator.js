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
					index: 0,
					name: "Angel Fish",
					type: "fish",
					health: 5,
					gold: 1
				},
				{	
					index: 1,
					name: "Gold Fish",
					type: "fish",
					health: 2,
					gold: 2
				},
				{
					index: 2,
					name: "Black Molly",
					type: "fish",
					health: 8,
					gold: 2	
				},
				{
					index: 3,
					name: "Black Skirt Tetra",
					type: "fish",
					health: 10,
					gold: 4
				},
				{
					index: 4,
					name: "Kuhli Loach",
					type: "fish",
					health: 7,
					gold: 1
				},
				{
					index: 5,
					name: "Betta",
					type: "fish",
					health: 4,
					gold: 1
				}
			],
			[
				{
					index: 6,
					name: "Barracuda",
					type: "fish",
					health: 15,
					gold: 10
				}
			],
		];
		this.fishGoldTable = {};
		this.initializeFishGoldTable();
	}


	initializeFishGoldTable() {
		this.fishes.map((tier) => {
			tier.map((fish) => {
				this.fishGoldTable[fish.name] = fish.gold;
			});
		});
		console.log(this.fishGoldTable);
	}

	getFish(tier) {
		tier -= 1;
		return this.fishes[tier][Math.floor(Math.random()*this.fishes[tier].length)];
	}

	getFishGold(fishName) {
		return this.fishGoldTable[fishName];
	}

	getArea(tier) {
		tier -=1;
		return this.areas[tier];
	}

	getAreas() {
		return this.areas;
	}

	getAreasDropdownInfo(maxTier) {
		let options = [
			{ value: 1, label: this.areas[0] },
			{ value: 2, label: this.areas[1] }
		];
		return options.slice(0, maxTier);
	}
}

const instance = new FishCreator();
Object.freeze(instance);

export default instance;