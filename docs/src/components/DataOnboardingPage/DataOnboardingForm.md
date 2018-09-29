# DataOnboardingForm.js

## Summary: 
This file renders the data onboarding form required for onborading process.

## Function: 
A constructor is defined which stores the default state for the form. 
`propName` stores the input value
`propNameError` stores the input error message
`propNameValid` stores the boolean value to check the validity of the name entered.

State update on form change is handled by the `onRadioYes`, `onRadioNo` and `onTextChange`.
```
this.setState({
    [e.target.name]: "No"/"Yes",
    submitAlert: <div />
});
``` 
handles the state change and updates it by removing any alerts.

`onTextChange()` handles any changes made in the input field.

Form validation is handled by `formIsValid()` function which checks for the fields in the form.

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