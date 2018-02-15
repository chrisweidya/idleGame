import store from './store';
import {articles} from './constants';
import {messagesEnum} from './constants';

console.log(articles);

export const addArticle = article => ({ type: articles.ADD_ARTICLE, payload: article });

export const increaseStr = () => {
	let currState = store.getState();
	let gold = currState.stats.gold;
	let strCost = currState.stats.strCost;
	let messages;
	if(gold >= strCost) {
		gold -= strCost;
		strCost *= 2;
		let str = currState.stats.str + 1;
		messages = addMessage(messagesEnum.INCREASE_STR).newMessages;
		return { 
			type: articles.INCREASE_STR, newStr: str, newStrCost: strCost, newGold: gold, newMessages: messages
		};
	}
	else
		return addMessage(messagesEnum.INSUFFICIENT_GOLD);
};

export const addMessage = message => {
	let currState = store.getState();
	let messages = [...currState.messages];	
	if(messages.length >= currState.settings.messageSize) {
		messages.splice(0, 1);
	}
	messages.push(message);
	return {
		type: articles.ADD_MESSAGE, newMessages: messages
	}
};