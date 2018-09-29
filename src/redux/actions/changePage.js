// Define an action to return an object
// with a type of CHANGE_PAGE and a page 
// attribute
const changePage = (page) => {
	return {
		type: "CHANGE_PAGE",
		page
	};
};

export default changePage;
