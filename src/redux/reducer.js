import articles from './constants';

const initialState = {
	articles: [],
	stats: {
		str: 1,
		strCost: 5,
		gold: 10
	}
};

const rootReducer = (state = initialState, action) => {
	let res;
	switch (action.type) {
		case articles.ADD_ARTICLE: {
			res = { ...state, articles: [...state.articles, action.payload ]};
			return res;
		}
		case articles.INCREASE_STR: {			
			res = { ...state, stats: {...state.stats, str: action.newStr, strCost: action.newStrCost, gold: action.newGold}};
			return res;
		}
		default:
			return state;
	}
};


export default rootReducer;