# validatorConst.js

## Summary: 
This file defines the constants which are used for form validation.

## Function:
```
export const firstName = (value, props) => {
    ...
}
```
Above `const` checks for the validation for first name in the form.
Following regex is defined which is used for matching with the incoming text values
in the form.

`^[a-zA-Z'\\s+]{1,15}$`

This function also makes sure that first name is entered into the form.
```
export const lastName = (value, props) => {
    ...
}
```

Similar to `const firstName`, this const is defined to check the last name
in the form. 

Similar regex pattern as that of `firstName` is used here.
```
export const email = (value) => {
    ...
}
```

Above `const` checks for valid email entries.

Following `const` checks whether the `id` number entered is valid or not.
```
export const idNumber = (value) => {
    ...
}
```

`^[0-9]{7,10}$` is the regex used here. It checks whether or not only numbers are
present and are the of length between 7 - 10.
```
export const eaiNumber = (value, props) => {
    ...
}
```
Above const contains validator for EAI number.

regex pattern used here is `^[0-9]{1,20}$` which checks for numbers from 0-9
of length between 1 - 20.
```
export const fedexOpCo = (value, props) => {
    ...
}
```

This const validated FedEx OpCo.
```
export const buisness = (value, props) {
    ...
}
```

Above `const` checks for the buisness value text area. This function is subject to
change in the future.
```
export const message = (value, props) => {
    ...
}
```
Validates the message for the buisness team.

## Common Issues: 
None