// Define an action with a type of SUBMIT
// and an attribute of fields
// This will be used to submit form data to the store
const submitForm = (fields) => {
	return {
		type: "SUBMIT",
		fields
	};
};

export default submitForm;
