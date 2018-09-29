import React, {Component} from 'react';
import "./ContactForm.css";
import axios from 'axios';
import SuccessAlert from "../Alert/SuccessAlert";
import ErrorAlert from "../Alert/ErrorAlert";
import { getRegexPattern } from './validateHelperFunctions';
import { getErrorMessage } from './validateHelperFunctions';

// This contains the actual form portion on the contact page
class ContactForm extends Component {
	// Define initial state of form
	//propName is the input value
	//propNameError is the input error message
	//propNameValid is the boolean saying
	constructor(props){
		super(props);
		this.state = {
			firstName: "",
			firstNameError:"",
			firstNameValid:false,
			lastName: "",
			lastNameError: "",
			lastNameValid:false,
			employeeID: "",
			employeeIDError:"",
			employeeIDValid:false,
			fedExOpCo: "",
			fedExOpCoError:"",
			fedExOpCoValid:false,
			emailAddress: "",
			emailAddressError:"",
			emailAddressValid:false,
			itccMessage: "",
			itccMessageError:"",
			itccMessageValid:false,
			submitAlert: <div />
		}
	}
	
	// Update the state whenever the text changes for each field
	onTextChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	// Check if the form is valid
	formIsValid() {
		return this.state.firstNameValid && this.state.lastNameValid 
			&& this.state.emailAddressValid && this.state.employeeIDValid
			&& this.state.fedExOpCoValid && this.state.itccMessageValid;
	}

	// Get only data from state that needs to be submitted
	getDataFromState(){
		const data = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			employeeID: this.state.employeeID,
			fedexOpCo: this.state.fedexOpCo,
			emailAddress: this.state.emailAddress,
			itccMessage: this.state.itccMessage
		};

		return data;
	}

	// Submit a post request on submit
	// First, prevent the default of the page reloading
	handleSubmit(e) {
		e.preventDefault();
		const data = this.getDataFromState();

		if(this.formIsValid()){
			// Define variables to determine which alert to display
			var success = false;
			var postResponse = "";

			// Submit the post request
			axios.post('https://jsonplaceholder.typicode.com/posts/1', {
				method: "POST",
				body: JSON.stringify(data)
			}).then( (response) => {
				success = true;
				postResponse = response;
			}).catch( (error) => {
				postResponse = error;
	        	});

			// If the post request was successful, pop up with success message
			if(success) {
				this.setState({
					submitAlert: <SuccessAlert
						closeAlert={() => this.setState({
							submitAlert: <div />
						})} />
				});

				// Do something to postResponse. Will change eventually to handle response
				console.log(postResponse);
			// Otherwise, pop up an error message
			} else {
				const message = "We're sorry. Something went wrong when submitting your form. Please try again.";
				this.setState({
					submitAlert: <ErrorAlert
						closeAlert={() => this.setState({
							submitAlert: <div />
						})}
						message={message}/>
				});

				// Do something to postResponse. Will change eventually to handle response
				console.log(postResponse);
			}
		} else {
			// Display error message if form is not valid
			const message = "All form fields are not valid. Please check your input before submitting.";
			this.setState({
				submitAlert: <ErrorAlert
					closeAlert={() => this.setState({
						submitAlert: <div />
					})}
					message={message}/>
			});
		}
	}

	/*inputs will call this function on blur to validate their the inputs states
	parameter (e) finds the prop that we are using
	parameter (required) is a boolean stating if the input is required or not
	parameter (validations) is holding an array of validation checks the input needs*/
	validate(e, required, validations) {
		 const inputName = e.target.name;
		 const value = e.target.value;

		 //"#propName"
		 const inputId = '#' + e.target.name;
		 const element = document.querySelector(inputId); 
		 //"propName" + "Error"
		 var inputErrorMessage = e.target.name + "Error";
		 //"propName" + "Valid"
		 var inputisValid = e.target.name + "Valid";

		 //Boolean used for making sure all of the regex test pass
		 var passRegexTest = true;
		 //console.log(valueName);

		 //Holds all of the regexPatterns that are being used by the input
		 let regexPatterns = getRegexPattern(validations);

		 //Holds an array of error messages
		 let errorMessages = getErrorMessage(inputName);
			//var namePatt = new RegExp("^[a-zA-Z]{1,15}$");

			/*Required == true test to see if the input is not null and also to make sure
			that all of the regex test pass. If they do pass the invalidInput class will be removed and
			'propName'Valid = true*/

			if (required === true) {
				for(let i=0; i<regexPatterns.length; i++) {
					if( !regexPatterns[i].test(value)) {
						passRegexTest = false;
						break;
					}
				}

				if (!value.toString().trim().length) {

					this.setState({
						[inputErrorMessage]: errorMessages[0],
						[inputisValid]: false
					});
					console.log(e.target.name);
					console.log(e.target.value);

					if(!element.classList.contains('invalidInput')) {
						return element.classList.add('invalidInput');
					}

				} else if (passRegexTest === false) {
					this.setState({
						[inputErrorMessage]: errorMessages[1],
						[inputisValid]: false
					});
					console.log(this.state.itccMessageError);
					//var element = document.getElementById(inputName);
					if(!element.classList.contains('invalidInput')) {
						return element.classList.add('invalidInput');
					}
				} else {
					//This else will remove the border once the validations is true
					//var element = document.getElementById(inputName);
					element.classList.remove('invalidInput');
					this.setState({
						[inputErrorMessage]:"",
						[inputisValid]:true
					});
				}
			/*If the input is not required then the state will be valid on null but if the input
			is not null it will be validated to make sure a valid state is in the input*/
			} else {
				//If the input is empty
				if(value === "") {
					//const element = document.getElementById(inputName);
					try{
						element.classList.remove('invalidInput');
						this.setState({
							[inputErrorMessage]:"",
							[inputisValid]:true
						})
					} catch (error) {
						//Do Nothing
					}
				//If the input is not empty test all of the regex patterns
				} else {
					for(let i=0; i<regexPatterns.length; i++) {
						if( !regexPatterns[i].test(value)) {
							passRegexTest = false;
							break;
						}
					}
					if(passRegexTest === false) {
						this.setState({
							[inputErrorMessage]: errorMessages[1],
							[inputisValid]: false
						});
						//const element = document.getElementById(inputName);
						if(!element.classList.contains('invalidInput')) {
							return element.classList.add('invalidInput');
						}
					} else {
						try{
							element.classList.remove('invalidInput');
							this.setState({
								[inputErrorMessage]:"",
								[inputisValid]:true
							})
						} catch (error) {
							//Do Nothing
						}
					}
				}
			}
		};


	// Render the content
	render() {
		return(
			<div 
				className="row" 
				style={{padding: "40px"}}	
			>
				<form className="col-sm-6 col-md-6 col-lg-6">
					<div className="row question">
						<input 
							type="text" 
							className="form-control question invalidInput"
							id="firstName"
							name="firstName" 
							onChange={(e) => this.onTextChange(e)} 
							placeholder="First Name" 
							onBlur={(e) => this.validate(e, true, ['name'])}
						/>
					<span>{this.state.firstNameError}</span>

					</div>
					<div className="row question">
						<input 
							type="text" 
							className="form-control question invalidInput" 
							id="lastName"
							name="lastName" 
							onChange={(e) => this.onTextChange(e)} 
							placeholder="Last Name" 
							onBlur={(e) => this.validate(e, true, ['name'])}
						/>
						<span>{this.state.lastNameError}</span>
					</div>
					<div className="row question">
						<input 
							type="text" 
							className="form-control question invalidInput" 
							id="employeeID"
							name="employeeID" 
							onChange={(e) => this.onTextChange(e)} 
							placeholder="Employee ID Number" 
							onBlur={(e) => this.validate(e, true, ['employeeID'])}
						/>
						<span>{this.state.employeeIDError}</span>
					</div>
					<div className="row question">
						<input 
							type="text" 
							className="form-control question invalidInput"
							id="fedExOpCo"
							name="fedExOpCo" 
							onChange={(e) => this.onTextChange(e)} 
							placeholder="FedEx OpCo" 
							onBlur={(e) => this.validate(e, true, ['name'])}
						/>
						<span>{this.state.fedExOpCoError}</span>
					</div>
					<div className="row question">
						<input 
							type="text" 
							className="form-control question invalidInput"
							id="emailAddress"
							name="emailAddress" 
							onChange={(e) => this.onTextChange(e)} 
							placeholder="Email Address" 
							onBlur={(e) => this.validate(e, true, ['emailAddress'])}
						/>
						<span>{this.state.emailAddressError}</span>
					</div>
					<div className="row question">
						<textarea 
							className="form-control question invalidInput"
							id="itccMessage"
							name="itccMessage" 
							onChange={(e) => this.onTextChange(e)} 
							rows="3" 
							placeholder="Message" 
							style={{fontSize: "12pt"}}
							onBlur={(e) => this.validate(e, true, ['message'])}
						/>
						<span>{this.state.itccMessageError}</span>
					</div>
					{this.state.submitAlert}
					<button 
						onClick={(e) => this.handleSubmit(e)} 
						type="submit" 
						className="btn btn-block"
					>

						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default ContactForm;
