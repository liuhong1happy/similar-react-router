require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
const React = require('react');
const ReactDOM = require('react-dom');
const RouterApp = require('./router');

const {Provider} = require('react-redux');

const store = require('./store/configureStore')

ReactDOM.render(
	<Provider store={store} >
		<RouterApp />
	</Provider>, 
	document.getElementById('react-container'));
	
module.exports = RouterApp;