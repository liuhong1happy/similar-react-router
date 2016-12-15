const types = require('../constants/ActionTypes');

const Ajax = require('../utils/Ajax');

const fetchHomePageDataAction = function(payload){
	return {type: types.homePage.FETCH_HOME_PAGE_DATA, payload}
}

exports.fetchHomePageData = ()=> dispatch => {
	Ajax({
		url: '/api/home.json',
		type: "GET",
		success(data){
			dispatch(fetchHomePageDataAction(data));
		}
	})
}
