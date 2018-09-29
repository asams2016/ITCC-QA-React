# submitForm.js

## Summary:
This action hanles the submit action during form submission.

## Function:
```
const submitForm = (fields) => {
	return {
		type: "SUBMIT",
		fields
	};
};
```
It defines an action with a SUBMIT type with an attribute of fields.

#Common Issues:
None