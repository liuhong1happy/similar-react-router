const React = require('react');
const ReactDOM = require('react-dom');
const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');
const HomePageAction = require('../actions/homePage');

const mapStateToProps = function( state ) {
	return {
		pages: state.homePage.pages
	}
}

const mapDispatchToProps = function(dispatch){
	return bindActionCreators(HomePageAction,dispatch);
}

class HomeIndexPage extends React.Component{
	componentDidMount(){
		const {fetchHomePageData} = this.props;
		fetchHomePageData();
	}
	render(){
		let props = this.props;
		return (<div>
			This is HomeIndexPage !
			The Children Count is { props.pages.length }.
		</div>)
	}
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(HomeIndexPage);