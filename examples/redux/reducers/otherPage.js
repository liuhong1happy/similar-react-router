const types = require('../constants/ActionTypes');

const otherPage = {
	page: {
		name: "..."
	}
};

module.exports = function(state = otherPage,action){
	const {type, payload} = action;
	switch(type){
		case types.otherPage.FETCH_OTHER_PAGE_DATA:
			return { ...state, page: payload.data.page };
		default:
			return state;
	}
}