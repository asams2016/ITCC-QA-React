// Define a reducer to return the page attribute of
// the action that called it when the type of the
// action is CHANGE_PAGE, otherwise return the current
// state (page)
const pageReducer = (state = "home", action) => {
	switch(action.type){
		case "CHANGE_PAGE":
			return action.page;
		default: 
			return state;
	}
};

export default pageReducer;
