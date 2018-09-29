# ValidateHelperFunction.js

## Summary:
This file checks for the validity of the inputs through regex patterns in the form and generates an error message when the input is of invalid type. 

## Function:
`var regexPatterns` is passed as a parameter to `getRegexPattern` which loops through the array to check if any validations are equal.

For example:
```
if (validations[i] === 'name' ) {
    regexPatterns.push(new RegExp(/^[a-zA-Z]{1,15}$/));
}
```
checks if the entered name is valid by comparing the name to the regex expression defined. 

`regexPattern` is returned as an array to test the validation.

`var export getErrorMessage` returns an error message depending on the error type and the input associated with it.

## Common Issues:
None