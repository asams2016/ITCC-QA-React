import {isEmail} from 'validator';
import React, {Component} from 'react';
import validator from 'validator';


//Define constants to use for validation
//Using this const to validate the firstName
  export const firstName = (value, props) => {
  	var namePatt = new RegExp("^[a-zA-Z'\\s+]{1,15}$");
  	if (!value.toString().trim().length) {
  		var element = document.getElementById('firstName');

  		return element.classList.add('invalidInput'),
  			<span className="form-error is-visible invalid-feedback">
  				First Name is required to complete this form
  			</span>;
  	} else if (!namePatt.test(value)) {
  		var element = document.getElementById('firstName');

  		return element.classList.add('invalidInput'),
  			<span className="form-error is-visible invalid-feedback">
  				First Name should only contain letters
  			</span>;
  	} else {
  	//This else will remove the border once the validations is true
  		var element = document.getElementById('firstName');
  		element.classList.remove('invalidInput');
  	}
  };

  // Using this const to validate the Last Name
  export const lastName = (value, props) => {
  	var namePatt = new RegExp("^[a-zA-Z'\\s+]{1,15}$");
  	if (!value.toString().trim().length) {
  		var element = document.getElementById('lastName');
  		return element.classList.add('invalidInput'),
  			<span className="form-error is-visible invalid-feedback">
  				Last Name is required to complete this form
  			</span>;
  	} else if (!namePatt.test(value)) {
  		var element = document.getElementById('lastName');

  		return element.classList.add('invalidInput'),
  			<span className="form-error is-visible invalid-feedback">
  				Last Name should only contain letters
  			</span>;
  	} else {
  	//This else will remove the border once the validations is true
  		var element = document.getElementById('lastName');
  		element.classList.remove('invalidInput');
  	}
  };

  // Using this const to validate the Email
  export const email = (value) => {
  	if (!isEmail(value)) {
  		var element = document.getElementById('emailAddress');
  		return element.classList.add('invalidInput'),
  			<span className="form-error is-visible invalid-feedback">
  			       ${value} is not a valid email.
  			</span>;
  	} else {
  	//This else will remove the border once the validations is true
  		var element = document.getElementById('emailAddress');
  		element.classList.remove('invalidInput');
  	}
  };

  // Using this const to validate the Id Number
  export const idNumber = (value) => {
  	var idNumberPatt = new RegExp("^[0-9]{7,10}$");
  	if (!idNumberPatt.test(value)) {
  		var element = document.getElementById('employeeID');
  		return element.classList.add('invalidInput'),
  			<span className="form-error is-visible invalid-feedback">
  			       ID number has to be 7-10 Digits
  			</span>;
  	} else {
  	//This else will remove the border once the validations is true
  		var element = document.getElementById('employeeID');
  		element.classList.remove('invalidInput');
  	}
  };

  // Using this const to validate the Project Name
  export const projectName = (value, props) => {
  	if (!value.toString().trim().length) {
  		var element = document.getElementById('projectName');
  		return element.classList.add('invalidInput'),
  			<span className="form-error is-visible invalid-feedback">
  			       Project name is required to complete this form
  			</span>;
  	} else {
  		var element = document.getElementById('projectName');
  		element.classList.remove('invalidInput');
  	}
  };

  // Using this const to validate the EAI Number
  export const eaiNumber = (value, props) => {
  	var idNumberPatt = new RegExp("^[0-9]{1,20}$");
  	if (!idNumberPatt.test(value)) {
  		var element = document.getElementById('eaiNumber');
  		return element.classList.add('invalidInput'),
  			<span className="form-error is-visible invalid-feedback">
  			       EAI number has to be 1-20 Digits
  			</span>;
  	} else {
  	//This else will remove the border once the validations is true
  		var element = document.getElementById('eaiNumber');
  		element.classList.remove('invalidInput');
  	}
  };

  // Using this const to validate the FedEx OpCo
  export const fedexOpCo = (value, props) => {
  	if (!value.toString().trim().length) {
  		var element = document.getElementById('fedExOpCo');
  		return element.classList.add('invalidInput'),
  			<span className="form-error is-visible invalid-feedback">
  			       Fedex OpCo/Region is required to complete this form
  			</span>;
  	} else {
  	//This else will remove the border once the validations is true
  		var element = document.getElementById('fedExOpCo');
  		element.classList.remove('invalidInput');
  	}
  };

  // Using this const to validate the required Business value Textarea
  // Don't need to validate this field now, but may want to in the future.
  // If want to validate input, change the if statement to test the valid 
  // condition and add a message
  export const business = (value, props) => {
  	if (false) {
  		var element = document.getElementById('business-justification');
  		return element.classList.add('invalidInput'),
  			<span className="form-error is-visible invalid-feedback">
			{ /* Some message for feedback on input */ }
  			</span>;
  	} else {
  	//This else will remove the border once the validations is true
  		var element = document.getElementById('business-justification');
  		element.classList.remove('invalidInput');
    }
  };

// Using this to validate the required message for the business team
  export const message = (value, props) => {
  	if (!value.toString().trim().length) {
  		var element = document.getElementById('message');
  		return element.classList.add('invalidInput'),
  			<span className="form-error is-visible invalid-feedback">
  				A message to the ITCC team is required to complete this form
  			</span>;
  	} else {
  	//This else will remove the border once the validations is true
  		var element = document.getElementById('message');
  		element.classList.remove('invalidInput');
    }
  };
