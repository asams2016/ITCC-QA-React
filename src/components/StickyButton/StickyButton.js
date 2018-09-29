import React, {Component} from 'react';
import {connect} from 'react-redux';
import changePage from '../../redux/actions/changePage';
import './StickyButton.css';

// This is the sitcky button that stays on the side of
// every page and links to another page
class StickyButton extends Component {
	// Change the page to where the link goes
	handleClick() {
		this.props.changePage("aboutSplunk");
	}
	
	render() {
		return(
			<a 
				role="button" 
				className="btn sticky-link fixed-right" 
				onClick={(e) => this.handleClick()}
			>
				<span style={{fontSize: "13pt"}}>
					Data Onboarding
				</span>
			</a>
		);
	}
}

// Connect this component to the store to be able 
// to change the page
const mapDispatchToProps = (dispatch) => {
	return {
		changePage: (newPage) => {
			dispatch(changePage(newPage));
		}
	};
}

export default connect(null, mapDispatchToProps)(StickyButton);
