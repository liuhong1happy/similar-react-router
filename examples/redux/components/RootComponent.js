const React = require('react');
const ReactDOM = require('react-dom');
const {Link} = require('../../../react-router');

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
			
module.exports = RootComponent;