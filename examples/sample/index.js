require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
const React = require('react');
const ReactDOM = require('react-dom');
const {Link,Route,Router,RouteHistory} = require('../../react-router');

const RootComponent = (props)=>{
    return (<div>
        <h2>This is RootComponent!</h2>
        <ul>
            <li>
                <Link to="/home/index" anchor={true}>首页</Link>
            </li>
            <li>
                <Link to="/home/list" anchor={true}>列表页</Link>
            </li>
            <li>
                <Link to="/home/detail/page001" anchor={true}>详情页</Link>
            </li>
            <li>
                <Link to="/other?name=Other" anchor={true}>其它页面</Link>
            </li>
        </ul>
        <div>{props.children}</div>
    </div>)
}

const HomePage = (props)=>{
	return (<div className="home-page">{props.children}</div>)
}

const OtherPage = (props)=>{
	return (<div>{"This is "+props.name+" page!"}</div>)
}

const HomeIndexPage = ()=>{
    return (<div>
        This is HomeIndexPage!
    </div>)
}

const HomeListPage = ()=>{
    return (<div>
        This is HomeListPage!
    </div>)
}

const HomeDetailPage = (props)=>{
    return (<div id={"detail-"+props.id}>
        This is HomeDetailPage!
    </div>)
}

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
	
ReactDOM.render(<RouterApp />, document.getElementById('react-container'));
	
module.exports = RouterApp;