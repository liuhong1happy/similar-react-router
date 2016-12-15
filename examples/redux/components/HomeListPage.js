const React = require('react');
const ReactDOM = require('react-dom');

const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');
const HomePageAction = require('../actions/homePage');

const mapStateToProps = function( state ) {
	return {
		pages_count: state.homePage.pages.length
	}
}

const mapDispatchToProps = function(dispatch){
	return bindActionCreators(HomePageAction,dispatch);
}

class HomeListPage extends React.Component{
	componentDidMount(){
		const {fetchHomePageData} = this.props;
		fetchHomePageData();
	}
	render(){
		let props = this.props;
		return (<div>
			This is HomeListPage !
			The Children Count is { props.pages_count }.
		</div>)
	}
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(HomeListPage);