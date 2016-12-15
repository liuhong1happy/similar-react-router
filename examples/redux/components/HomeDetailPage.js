const React = require('react');
const ReactDOM = require('react-dom');
const HomeDetailPage = (props)=>{
    return (<div id={"detail-"+props.id}>
        This is HomeDetailPage!
    </div>)
}
module.exports = HomeDetailPage;