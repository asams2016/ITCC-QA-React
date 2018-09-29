/*
   This component renders the checklist of items required before
   accessing the data onboarding form. Initially, the button to 
   get to the data onboarding form is greyed and disabled, but once
   all of the checkboxes are selected, the button is enabled.

   The state in this component holds booleans for whether each of 
   the checkboxes is checked.
*/

// Import 
import React, {Component} from 'react';
import {connect} from 'react-redux';
import changePage from '../../redux/actions/changePage';
import './AboutSplunkPage.css';

// Render the checklist required for accessing the onboarding form
class ReviewChecklist extends Component {
	// Set the state to hold booleans for whether
	// each of the checkboxes are checked
	constructor(props){
		super(props);

		this.state = {
			option1: false,
	 		option2: false,
		 	option3: false
		};
	}

	// Whenever a checkbox toggles, update the boolean
	// value for that box in the state. The name of the
	// checkbox must match the name in the state to work
	// as expected. Once the state is updated, call setClear()
	// to update appearance of button
	checkChange(e) {
		this.setState({
			[e.target.name]: e.target.checked
		}, () => this.setClear());
	}

	// This handles the conditional-submit button that should only be able to 
	// be selected if all the checkboxes are selected
	// This function sees if all of the checkboxes are checked:
	// if they are, then change the class from no-submit (greyed and disabled) to submit
	// if they aren't, then change the class from submit to no-submit
	setClear() {
		var element = this.refs.conditionalSubmit;
		if(this.state.option1 && this.state.option2 && this.state.option3){
			element.classList.remove('noSubmit');
			element.classList.add('submit');
		} else {
			if(element.classList.contains('submit')) {
				element.classList.remove('submit');
				element.classList.add('noSubmit');
			}
		}
	}

	// Handle the click of the submit button. If all checkboxes
	// are cleared, then change the page. If not, then don't do anything
	handleSubmit(e) {
		e.preventDefault();
		var element = this.refs.conditionalSubmit;
		if(element.classList.contains('submit')){
			this.props.changePage("dataOnboarding");
		}
	}

	// Render all of the checkboxes and the button that will change
	// appearances based on whether all of the checkboxes are selected
	render() {
		return(
			<form>
				<div className="checkbox">
					<label>
						<input 
							onChange={(e) => this.checkChange(e)} 
							type="checkbox" 
							id="option1"
							name="option1"
							value="" 
						/>
						Option 1
					</label>
				</div>
				<div className="checkbox">
					<label>
						<input 
							onChange={(e) => this.checkChange(e)} 
							type="checkbox" 
							id="option2"
							name="option2"
							value="" 
						/>
						Option 2
					</label>
				</div>
				<div className="checkbox">
					<label>
						<input 
							onChange={(e) => this.checkChange(e)} 
							type="checkbox" 
							id="option3"
							name="option3"
							value="" 
						/>
						Option 3
					</label>
				</div>
				<button 
					className="btn noSubmit" 
					id="conditional-submit"
					ref="conditionalSubmit"
					onClick={(e) => this.handleSubmit(e)}
					style={{width: "300px"}}
				>
					Fill out onboarding form
				</button>
			</form>
		);
	}
}

// Connect to the store to be able to change the page
const mapDispatchToProps = (dispatch) => {
	return {
		changePage: (newPage) => {
			dispatch(changePage(newPage));
		}
	};
}

export default connect(null, mapDispatchToProps)(ReviewChecklist);
