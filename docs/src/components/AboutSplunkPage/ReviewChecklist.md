# ReviewChecklist

# Summary:
   This component renders the checklist of items required before
   accessing the data onboarding form. Initially, the button to 
   get to the data onboarding form is greyed and disabled, but once
   all of the checkboxes are selected, the button is enabled.

   The state in this component holds booleans for whether each of 
   the checkboxes is checked.


# Function:
Following constructor holds the default state (false) for the checkboxes for the onboarding form.
```
constructor(props){
    super(props);
        this.state = {
	    option1: false,
	    option2: false,
	    option3: false
	};
}
```

`checkChange(e) {}` function checks for the change in the checkbox and updates the boolean value.
Upon state update, `setClear()` function is called to update the appearance of the button.
```
checkChange(e) {
    this.setState({
        [e.target.name]: e.target.checked
    }, () => this.setClear());	
}
```
`setClear()` is also responsible for making sure that submit button is only avaible if all the options are checked.

`handleSubmit(e) {}` handles the click of the submit button. Depending on the state of the checkboxes, it decides whether or
not to change the page.

`render()` renders the page with checkboxes and submit button.

# Common Issues:

None
