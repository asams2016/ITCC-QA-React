// Define the initial state for the data onboarding form
const initialDataOnboardingState = {
	firstNamePOC: "",
	lastNamePOC: "",
	idNumberPOC: "",
	emailPOC: "",
	projectName: "",
	eaiNumber: "",
	opCo: "",
	needDataMasking: "No",
	businessJustification: "",
};

// Define a reducer to return the fields attribute
// of the action that called it when the type of
// action is SUBMIT, otherwise return the current state
const dataOnboardingReducer = (state = initialDataOnboardingState, action) => {
	switch(action.type){
		case "SUBMIT":
			return action.fields;
		default: 
			return state;
	}
};

export default dataOnboardingReducer;
