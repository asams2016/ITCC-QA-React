// Set the initial state for the contact form
const initialContactState = {
	firstName: "",
	lastName: "",
	employeeId: "",
	fedExOpCo: "",
	emailAddress: "",
	message: ""
};

// Define a reducer to return the fields attribute
// of the action that called it when the type of
// action is SUBMIT, otherwise return the current state
const contactReducer = (state = initialContactState, action) => {
	switch(action.type){
		case "SUBMIT":
			return action.fields;
		default: 
			return state;
	}
};

export default contactReducer;
