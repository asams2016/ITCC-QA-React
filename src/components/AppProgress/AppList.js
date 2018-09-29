import React, {Component} from 'react';
import { ProgressBar } from 'react-bootstrap';
import AppProgressModal from './AppProgressModal';
import './AppProgress.css';

//This component renders a searchbar that onChange of input filters a list of all the applications and renders the resulting filtered list
//The filtered list of applications rendered shows app name, a progressbar showing the relative stage in onboarding progress and a modal that shows the exact stage along with next steps
class AppList extends Component{
	constructor(props){
		super(props);
		this.state = {
			modal: <div />
		};
	}

	//shows the modal when clicked
	handleShow(e, stage) {
		this.setState({ 
			modal: <AppProgressModal 
					stage={stage} 
					stageNames={this.props.stageNames}
					stageText={this.props.stageText}
					handleClose={() => this.handleClose()}
				/>
		});
	}

	// closes the modal when clicked
	handleClose() {
		this.setState({ 
			modal: <div />
		});
	}

	//returns a progressbar with correct completion percentage depending on stage of application
	progressBar(stage) {
		if(stage === this.props.stageNames.length){
			return <ProgressBar bsStyle="success" now={100} />;
		} else {
			return <ProgressBar now={(stage+1.0)*100/this.props.stageNames.length} />;
		}
	}
	

	//This renders the search bar and maps all the application in a list containing their name, a progress bar
	//and a button that renders a modal with the exact stage and next step in onboarding information
	render(){
		const apps = this.props.applications.map(app => 
			<div className="list-group-item clearfix row" key={app.name}>
				<div className="appName col-sm-2 col-md-2 col-lg-2">
					{app.name}
				</div>
				<div className="appName col-sm-8 col-md-8 col-lg-8">
					{this.progressBar(app.stage)}
				</div>
				<div className="appName col-sm-2 col-md-2 col-lg-2">
					<button type="button" onClick={e => this.handleShow(e, app.stage)}>
						View Activity
					</button>
				</div>
			</div>
		);

		return(
			<div className="container-fluid">
				<ul className="list-group">
					{apps}
				</ul>
				{this.state.modal}
			</div>
		);
	}
}
export default AppList;
