import React, {Component} from 'react';
import AppList from './AppList';
import SearchBar from '../SearchBar/SearchBar';
import GradientBanner from "../BannerTitle/GradientBanner";
import './AppProgress.css';

const stageNames = [
        'Questionnaire not Completed',
        'Questionnaire Completed',
        'Questionnaire Validated',
        'Request Submitted',
        'Server Validated',
        'Config Created',
        'Config Validated',
        'Config Deployed',
        'Dashboard Created'
];

const stageText = [
        'To start the data onboarding process, click the Tools dropdown in the Navigation Bar or simply click the green data onboarding tab.',
        'Next step info',
        'Next step info',
        'Next step info',
        'Next step info',
        'Next step info',
        'Next step info',
        'Next step info',
        'Next step info',
        'The data onboarding process is complete, you may view the dashboard for more information on your application.'
];

// This is the container for the applications progress page, it should render everything inside AppProgSearch
class AppProgressPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchText: "",
			appData: [],
			applications: []
		};
	}

	//grabs the necessary info: stage, app name, server IP...
	//will change when given real data to work with
	componentWillMount(){
		this.setState({
			appData: [
				{name: 'alpha', IP: 1234567, stage: 1},
				{name: 'bravo', IP: 8923456, stage: 3},
				{name: 'charlie', IP: 1902834, stage: 9},
				{name: 'delta', IP: 1843570, stage: 6},
				{name: 'echo', IP: 3976342, stage: 5},
				{name: 'foxtrot', IP: 4937246, stage: 7},
				{name: 'golf', IP: 2894362, stage: 2},
				{name: 'hotel', IP: 2894362, stage: 4},
				{name: 'indigo', IP: 2894362, stage: 8}
			]		
		}, () => {
			this.setState({
				applications: this.state.appData.filter(app => app.name.toLowerCase().includes(""))
			});
		});
		
		// axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
		// .then(json => json.data.results.map(result => ({
			// name: `${result.name.first} ${result.name.last}`,
			// id: result.registered
		// })))
		// .then(newData => this.setState({applications: newData, store: newData}))
		// .catch(error => alert(error));
	}

	// Sets the state of the search text input when the search button is clicked or enter key pressed
	// assigns the filtered list of applications to the applications array
	updateState(e) {
		this.setState({
			searchText: e.target.value,
			applications: this.state.appData.filter(app => app.name.toLowerCase().includes(e.target.value.toLowerCase()))
		});	
	}

	//filters through all applications, finds the ones that include your searchText, applicatiions is updated with that list
	//app.name may need to be changed depending on placeholders used in backend
	//onKeyDown is one key behind when searching
	search(e) {
		e.preventDefault();
		//this.setState({applications: this.state.appData.filter(app => app.name.toLowerCase().includes(this.state.searchText.toLowerCase()))});
		// This function is if you want submit the search somewhere
	}

	render() {
		return(
			<div>
				 <GradientBanner
					colors={["#FFCC00", "#FF6200"]}
					title={<SearchBar
							textChange={(e) => this.updateState(e)}
							search={(e) => this.search(e)}
						/>}
				/>
				<AppList 
					applications={this.state.applications} 
					stageNames={stageNames}
					stageText={stageText}
				/>
			</div>
		);
	}
}

export default AppProgressPage;
