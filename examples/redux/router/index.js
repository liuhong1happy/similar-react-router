const React = require('react');
const ReactDOM = require('react-dom');
const {Route,Router,RouteHistory} = require('../../../react-router');

const RootComponent = require('../components/RootComponent');
const HomeDetailPage = require('../components/HomeDetailPage');
const HomeIndexPage = require('../components/HomeIndexPage');
const HomeListPage = require('../components/HomeListPage');
const HomePage = require('../components/HomePage');
const OtherPage = require('../components/OtherPage');

class RouterApp extends React.Component {
	render(){
		return (
			<Router defaultRoute="/home/index" path="/" component={RootComponent}>
				<Route path="home" component={HomePage}>
					<Route path="index" component={HomeIndexPage} />
					<Route path="list" component={HomeListPage} />
					<Route path="detail/:id" component={HomeDetailPage} />
				</Route>
				<Route path="other" component={OtherPage}></Route>
			</Router>
		)
	}
}

module.exports = RouterApp;