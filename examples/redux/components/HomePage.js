const React = require('react');
const ReactDOM = require('react-dom');
const HomePage = (props)=>{
	return (<div className="home-page">{props.children}</div>)
}
module.exports = HomePage;