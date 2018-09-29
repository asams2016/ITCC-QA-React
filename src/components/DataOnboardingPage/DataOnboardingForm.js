import React, {Component} from 'react';
import axios from 'axios';
import './DataOnboardingForm.css';
import SuccessAlert from '../Alert/SuccessAlert';
import ErrorAlert from '../Alert/ErrorAlert';
import DataParser from './DataParser';
import { getRegexPattern } from '../ContactPage/validateHelperFunctions';
import { getErrorMessage } from '../ContactPage/validateHelperFunctions';

//---------------------------------------------------------------------------------------------
// This is the actual form portion for the data onboarding page
class DataOnboardingForm extends Component {
	// Define initial state
	//propName is the input value
	//propNameError is the input error message
	//propNameValid is the boolean saying
	constructor(props){
		super(props);
		this.state = {
			employeeID:"",
			employeeIDError:"",
			employeeIDValid:false,
			projectName: "",
			projectNameError:"",
			projectNameValid:false,
			eaiNumber: "",
			eaiNumberError:"",
			eaiNumberValid:false,
			fedexOpCo: "",
			fedexOpCoError:"",
			fedexOpCoValid:false,
			needDataMasking: "No",
			businessJustification: "",
			businessJustificationError:"",
			businessJustificationValid:true,
			dataSourceInfo: "",
			architecture: "",
			submitAlert: <div />
		}

	}

	//------------------------------------------------------
	// Update state on form change

	// Change state when the yes option is clicked and 
	// remove any alerts
	onRadioYes(e) {
		this.setState({
			[e.target.name]: "Yes",
			submitAlert: <div />
		});
	}

	// Change state when the no option is clicked and 
	// remove any alerts
	onRadioNo(e) {
		this.setState({
			[e.target.name]: "No",
			submitAlert: <div />
		});
	}

	// Update the state when an input field changes and 
	// remove any alerts
	onTextChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
			submitAlert: <div />
		});
	}

	//------------------------------------------------------
	// Validate and submit form

	// Check if the form is valid
	formIsValid() {
		var dataSourceValid = (this.state.dataSourceInfo !== "");
		return this.state.employeeIDValid && this.state.projectNameValid 
			&& this.state.eaiNumberValid && this.state.lineOfBusinessValid
			&& this.state.businessJustificationValid && dataSourceValid;
	}

	//------------------------------------------------------
	// Get only data from state that needs to be submitted
	getDataFromState(){
		const data = {
			employeeID: this.state.employeeID,
			projectName: this.state.projectName,
			eaiNumber: this.state.eaiNumber,
			fedexOpCo: this.state.fedexOpCo,
			needDataMasking: this.state.needDataMasking,
			businessJustification: this.state.businessJustification,
			dataSourceInfo: this.state.dataSourceInfo,
			architecture: this.state.architecture
		};

		return data;
	}

	// Submit a post request on submit
	// First, prevent the default of the page reloading
	handleSubmit(e) {
		e.preventDefault();
		const data = this.getDataFromState();
		var test = JSON.stringify(data);
		console.log(test);

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

				// Will eventually handle response, but just log for now
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

				// Will eventually handle response, but just log for now
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

	// Change the state to include the csv file uploaded
	fileUpload(data, name) {
		this.setState({
			[name]: data
		});
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

				if(!element.classList.contains('invalidInput')) {
					return element.classList.add('invalidInput');
				}
			} else {
				//This else will remove the border once the validations is true
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


	render() {
		return(
			<form>
				<ol>
					<li className="question">
						What is the employee ID of the point of contact for onboarding this project in case the
						Splunk Admins have any questions?
						<div className="row" style={{marginTop: "15px", marginBottom: "15px"}}>
							<div className="col-sm-8 col-md-8 col-lg-8">
								<input
									type="text"
									className="form-control invalidInput"
									id="employeeID"
									name="employeeID"
									refs="employeeID"
									onChange={(e) => this.onTextChange(e)}
									placeholder="Employee ID number"
									onBlur={(e) => this.validate(e, true, ['employeeID'])}
								/>
								<span>{this.state.employeeIDError}</span>
							</div>
						</div>
					</li>
					<li className="question">
						What project is requesting Splunk onboarding?
						<div className="row" style={{marginTop: "15px", marginBottom: "15px"}}>
							<div className="col-sm-4 col-md-4 col-lg-4">
								<input
									type="text"
									className="form-control invalidInput"
									id="projectName"
									ref="projectName"
									name="projectName"
									refs="projectName"
									onChange={(e) => this.onTextChange(e)}
									placeholder="Project name"
									onBlur={(e) => this.validate(e, true, ['name'])}
								/>
								<span>{this.state.projectNameError}</span>
							</div>
							<div className="col-sm-4 col-md-4 col-lg-4">
								<input
									type="text"
									className="form-control invalidInput"
									id="eaiNumber"
									ref="eaiNumber"
									name="eaiNumber"
									refs="eaiNumber"
									onChange={(e) => this.onTextChange(e)}
									placeholder="EAI number"
									onBlur={(e) => this.validate(e, true, ['eaiNumber'])}
								/>
								<span>{this.state.eaiNumberError}</span>
							</div>
						</div>
					</li>
					<li className="question">
						What line of business (i.e. FedEx OpCo and/or Region) is the project associated with?
						<div className="row" style={{marginTop: "15px", marginBottom: "15px"}}>
							<div className="col-sm-8 col-md-8 col-lg-8">
								<input
									type="text"
									className="form-control invalidInput"
									id="fedexOpCo"
									ref="fedexOpCo"
									name="fedexOpCo"
									onChange={(e) => this.onTextChange(e)}
									placeholder="FedEx OpCo/Region"
									onBlur={(e) => this.validate(e, true,['name'])}
								/>
								<span>{this.state.fedexOpCoError}</span>
							</div>
						</div>
					</li>
					<li className="question" style={{marginBottom: "30px"}}>
						Does your project require data masking?
						<a
							href="http://sp.web.fedex.com/sites/standards/sitepages/dataclass.aspx"
							target="_blank"
							rel="noopener noreferrer"
							style={{marginLeft: "10px"}}
						>
							<small className="form-text text-muted helpBlock">
								Click here for more info
							</small>
						</a>
						<div className="wrapper">
							<input
								className="form-check-input"
								type="radio"
								name="needDataMasking"
								id="data-masking-yes"
								value="yes"
								onChange={(e) => this.onRadioYes(e)}
							/>
							<label
								className="form-check-label"
								htmlFor="data-masking-yes"
							>
								Yes
							</label>
							<input
								className="form-check-input"
								type="radio"
								name="needDataMasking"
								id="data-masking-no"
								value="no"
								defaultChecked
								onChange={(e) => this.onRadioNo(e)}
							/>
							<label
								className="form-check-label"
								htmlFor="data-masking-no"
							>
								No
							</label>
						</div>
					</li>
					<li className="question"> Please upload a file containing your data source information with the following form:
						<div style={{marginTop: "15px", marginBottom: "15px"}}>
							<small className="form-text text-muted helpBlock">
								<ul>
									<li> Data input must be a .csv, .xls, or .xlsx file </li>
									<li> Repeating information should contain 1 line item per data source (logfile)</li>
									<li> Must use the fully qualified server <strong>Hostname</strong></li>
									<li> Environment should be Dev/Test or Prod (production) </li>
									<li> Time zone is what is used for the timestamps in the logfile</li>
									<li> Expected volume is per day for each logfile</li>
								</ul>
							</small>
						</div>
						<table className="table table-striped table-bordered" id="exampleTable">
							<tbody>
								<tr>
									<th>Hostname</th>
									<th>Environment</th>
									<th>Full Path to Logfile</th>
									<th>Time Zone</th>
									<th>Volume per Day</th>
								</tr>
								<tr>
									<td>drh00235.ute.fedex.com</td>
									<td>Dev/Test</td>
									<td>/var/log/messages</td>
									<td>CDT</td>
									<td>1.5 GB</td>
								</tr>
								<tr>
									<td>prh00511.prod.fedex.com</td>
									<td>Prod</td>
									<td>/var/log/messages</td>
									<td>CDT</td>
									<td>2.5 GB</td>
								</tr>
							</tbody>
						</table>
						<DataParser
							upload={(data, name) => this.fileUpload(data, "dataSourceInfo")}
							isRequired={true}
							allowedFiles=".csv,.xlsx,.xls"
						/>
					</li>
					<li className="question">
						What is the purpose/business value of adding this project to the Splunk platform?
						<div className="row">
							<div className="col-sm-12 col-md-12 col-lg-12">
						        	<textarea
									className="form-control"
									id="businessJustification"
									ref="businessJustification"
									name="businessJustification"
									onChange={(e) => this.onTextChange(e)}
									rows="3"
									style={{fontSize: "12pt"}}
									onBlur={(e) => this.validate(e, false, ['message'])}
								/>
								<span>{this.state.businessJustificationError}</span>

							</div>
						</div>
					</li>
					<li className="question">
						Please provide any application architecture diagram, if available.
						<DataParser
							upload={(data, name) => this.fileUpload(data, "architecture")}
							isRequired={false}
							allowedFiles=".tif,.jpg,.gif,.png,.bmp,.pdf"
						/>
					</li>
				</ol>
				{this.state.submitAlert}
				<div className="row" style={{marginTop: "15px", marginBottom: "15px"}}>
					<div className="col-sm-12 col-md-12 col-lg-12">
						<button onClick={(e) => this.handleSubmit(e)} className="btn btn-block submit">Submit</button>
					</div>
				</div>
			</form>
		);
	}
}

export default DataOnboardingForm;
