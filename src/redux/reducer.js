import {articles} from './constants';
import {locationsEnum} from './constants';
import FishCreator from '../fishCreator';


const initState = () => {
	let locationTotal = 3;
	let locationTier = 1;

	let location = {
		total: locationTotal,
		locationList: FishCreator.getAreasDropdownInfo(locationTotal),
		tier: locationTier,
		currLocation: FishCreator.getArea(locationTier)		
	};
	let fish  = FishCreator.getFish(locationTier);

	return {
		articles: [],
		location: location,
		fish: fish,
		caughtFishes: {},
		settings: {
			messageSize: 3,
			barDereaseInterval: 2000
		},
		stats: {
			str: 1,
			passiveStr: 1,
			strCost: 5,
			gold: 10
		},
		messages: ["It's a hot sunny day.", "You take your fishing pole and cast it out.", "Ah, nothing like a day of fishing."]
	}
};

const initialState = initState();

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
		case articles.CATCH_FISH: {
			res = {...state, caughtFishes: action.caughtFishes, messages: action.newMessages, fish: action.nextFish};
			return res;
		}
		case articles.REEL_FISH: {
			res = {...state, fish: {...state.fish, health: action.newHealth}};
			return res;
		}
		default:
			return state;
	}
};


export default rootReducer;