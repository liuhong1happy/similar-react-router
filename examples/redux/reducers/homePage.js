const types = require('../constants/ActionTypes');

const homePage = {
	pages: []
};

module.exports = function(state = homePage,action){
	const {type, payload} = action;
	switch(type){
		case types.homePage.FETCH_HOME_PAGE_DATA:
			return { ...state, pages: payload.data.pages };
		default:
			return state;
	}
}