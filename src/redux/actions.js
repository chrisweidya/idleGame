import store from './store';

console.log(store);

export const addArticle = article => ({ type: 'ADD_ARTICLE', payload: article });


export const increaseStr = payload => {
	let currState = store.getState();
	let gold = currState.stats.gold;
	let strCost = currState.stats.strCost;
	if(gold >= strCost) {
		gold -= strCost;
		strCost *= 2;
		let str = currState.stats.str + 1;
		return { type: 'INCREASE_STR', newStr: str, newStrCost: strCost, newGold: gold};
	}
};