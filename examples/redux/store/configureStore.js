const {createStore,applyMiddleware,compose } = require('redux');
const thunkMiddleware = require('redux-thunk');
const createLogger = require('redux-logger');
const rootReducer = require('../reducers');

const logger = createLogger();
let createStoreWithMiddleware;

if( process.env.NODE_ENV === "development"){
	createStoreWithMiddleware = compose(applyMiddleware(logger,thunkMiddleware))(createStore);
}else{
	createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware))(createStore);
}

const store = createStoreWithMiddleware(rootReducer);

module.exports = store;