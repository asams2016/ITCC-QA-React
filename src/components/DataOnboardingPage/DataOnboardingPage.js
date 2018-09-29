import React, {Component} from 'react';
import DataOnboardingForm from './DataOnboardingForm';

// This is the container for the data onboarding page
class DataOnboardingPage extends Component {
	render() {
		return(
			<div className="container-fluid">
				<h2>Overview</h2>
				<p>The purpose of this document is to gather information about your application and users and to provide guidlines and insight
				   on adding your data to Splunk at FedEx. Splunk Admins will review the informationto configure your onboarding to Splunk.</p>
				<p> Any Inputs that are <em>orange</em> are required to submit the form </p>
				   <DataOnboardingForm />
			</div>
		);
	}
}

export default DataOnboardingPage;
