# ContactForm.js

## Summary: 

This file updates the content on the contact form page.

## Function: 

Following imports are made to generate the alert message based on state of the contact form.
```
import SuccessAlert from "../Alert/SuccessAlert";
import ErrorAlert from "../Alert/ErrorAlert";
```
`constructor(props) {}` contains default values for the entries on the contact form.
 
 `onTextChange(e) {}` updates the state of each field whenever any changes are made.

 `formIsValid() {}` returns the state of the form by checking whether they it is valid or not.
 ```
return this.state.firstNameValid && this.state.lastNameValid 
    && this.state.emailAddressValid && this.state.employeeIDValid
    && this.state.fedExOpCoValid && this.state.itccMessageValid;
 ```
 Above return function checks the form with entries for the first name, last name, e-mail address, employee ID, FedEx OpCo and ITCC message.

 `getDataFromState() {}` fetches the data to be submitted. `const data` defines the type of the data to be fetched.

 Form submission is done by sending a POST request to the server. `handleSubmit()` function manages the submission request to the server. Upon clicking the submit
 button, form is ensured whether it is valid or not through `if(this.formIsValid())` and generate an appropriate response to the user.
 
 Below code displays a success message upon successfull request submission.
```
submitAlert: <SuccessAlert
    closeAlert={() => this.setState({
	submitAlert: <div />
    })} />
```
and 

```
submitAlert: <ErrorAlert
    closeAlert={() => this.setState({
        submitAlert: <div />
    })}
```
displays error message.

`validate() {}` function is called to validate the input states. `validate()` takes three variables `e`, `required`, `validation`.

`e` finds the prop being used.
`required` defines whether the input is required or not.
`validate`  contains an array of validation checks which are required by the input.

Finally `render()` function is responsible for rendering all the entries on the form.

## Common Issues: 
None
