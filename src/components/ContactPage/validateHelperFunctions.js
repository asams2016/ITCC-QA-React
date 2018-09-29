
/*getRegexPattern function is getting an array as the parameter
The function is looping through the array and seeing if any the validations equals
the validations we have. The function returns an array of RegexPatterns to test the input is valid */
export var getRegexPattern = (validations) => {
  var regexPatterns = [];
  for (let i=0; i<validations.length; i++) {

    if (validations[i] === 'name' ) {
      regexPatterns.push(new RegExp(/^[a-zA-Z]{1,15}$/));
    }
    else if (validations[i] === 'employeeID') {
      regexPatterns.push(new RegExp(/^[0-9]{7,10}$/));

    }
    else if (validations[i] === 'fedExOpCo') {
      regexPatterns.push(new RegExp(/^[a-zA-Z]{1,15}$/));
    }
    else if (validations[i] === 'emailAddress') {
      regexPatterns.push(new RegExp(/^[a-zA-z./_-]{4,20}@fedex.com$/));
    }
    else if (validations[i] === 'message') {
      regexPatterns.push(new RegExp(/^[\s\S]{1,200}$/));
    }
    else if (validations[i] === 'eaiNumber') {
      regexPatterns.push(new RegExp(/^[0-9]{1,15}$/));
    }
  }
  return regexPatterns;
}

/*getErrorMessage takes in a name of an input and returns an array of error messages
to be displayed if the input is invalid*/
export var getErrorMessage = (name) => {
  var errorMessages = []
  if (name === 'firstName') {
    errorMessages.push("First Name is required to complete this form");
    errorMessages.push("First Name should only contain letters");
  }
  if (name === 'lastName') {
    errorMessages.push("Last Name is required to complete this form");
    errorMessages.push("Last Name should only contain letters");
  }
  if (name === 'employeeID') {
    errorMessages.push("Employee ID is required to complete this form");
    errorMessages.push("Employee ID should only contain 7-10 numbers ");
  }
  if (name === 'fedExOpCo') {
    errorMessages.push("FedEx Operation Company is required to complete this form");
    errorMessages.push("FedEx Operation Company should only contain letters");
  }
  if (name === 'emailAddress') {
    errorMessages.push("Email Address is required to complete this form");
    errorMessages.push("Email Address should be a valid FedEx email");
  }
  if (name === 'itccMessage') {
    errorMessages.push("A message to ITCC is required to complete this form");
    errorMessages.push("The message should only be 200 characters long");

  }
  if (name === "lineOfBusiness") {
    errorMessages.push("FedEx Operation Company and(or) Region is required to complete this");
    errorMessages.push("FedEx Operation Company and(or) Region should only contain letters");
  }
  if (name === "eaiNumber") {
    errorMessages.push("EAI number is required to complete this form");
    errorMessages.push("EAI number can only contian 1-15 numbers");
  }
  if(name === "businessJustification") {
    errorMessages.push("A message to the ITCC stating the busines value is required");
    errorMessages.push("The message should only be 200 characters long");
  }
  if(name === "projectName") {
    errorMessages.push("Project Name is required to complete this form");
    errorMessages.push("Project Name should only conatin letters");
  }
  return errorMessages;

}
