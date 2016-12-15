const types = require('../constants/ActionTypes');

const Ajax = require('../utils/Ajax');

const fetchOtherPageDataAction = function(payload){
	return {type: types.otherPage.FETCH_OTHER_PAGE_DATA, payload}
}

exports.fetchOtherPageData = ()=> dispatch => {
	Ajax({
		url: '/api/other.json',
		type: "GET",
		success(data){
			dispatch(fetchOtherPageDataAction(data));
		}
	})
}
