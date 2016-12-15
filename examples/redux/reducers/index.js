const {combineReducers} = require('redux');

const homePage = require('./homePage');
const otherPage = require('./otherPage');

const rootReducer = combineReducers({
	homePage,
	otherPage
})

module.exports = rootReducer;