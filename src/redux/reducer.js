import {articles} from './constants';
import {locationsEnum} from './constants';
import FishCreator from '../fishCreator';

const initialState = {
	articles: [],
	location: {
		total: 3,
		locationList: FishCreator.getAreasDropdownInfo(location.total),
		tier: 1,
		currlocation: FishCreator.getArea(location.tier)
	},
	fish: FishCreator.getFish(1),
	settings: {
		messageSize: 3
	},
	stats: {
		str: 1,
		strCost: 5,
		gold: 10
	},
	messages: ["It's a hot sunny day.", "You take your fishing pole and cast it out.", "Ah, nothing like a day of fishing."]
};

const rootReducer = (state = initialState, action) => {
	let res;
	switch (action.type) {
		case articles.ADD_ARTICLE: {
			res = { ...state, articles: [...state.articles, action.payload ]};
			return res;
		}
		case articles.INCREASE_STR: {			
			res = { ...state, stats: {...state.stats, str: action.newStr, strCost: action.newStrCost, gold: action.newGold}, messages: action.newMessages};
			//console.log(res);
			return res;
		}
		case articles.CHANGE_LOCATION: {
			res = {...state, location: action.newLocation};
			return res;
		}
		case articles.ADD_MESSAGE: {
			res = { ...state, messages: action.newMessages};
			return res;
		}
		default:
			return state;
	}
};


export default rootReducer;