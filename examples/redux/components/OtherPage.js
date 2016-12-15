const React = require('react');
const ReactDOM = require('react-dom');

const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');
const OtherPageAction = require('../actions/otherPage');

const mapStateToProps = function( state ) {
	return {
		_name: state.otherPage.page.name
	}
}

const mapDispatchToProps = function(dispatch){
	return bindActionCreators(OtherPageAction,dispatch);
}

class OtherPage extends React.Component{
	componentDidMount(){
		const {fetchOtherPageData} = this.props;
		fetchOtherPageData();
	}
	render(){
		let props = this.props;
		return (<div>{"This is "+props._name+" page!"}</div>)
	}
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(OtherPage);