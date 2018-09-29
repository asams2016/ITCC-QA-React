import React, {Component} from 'react';

// This is a template for a bootstrap alert
// on error response from server
class ErrorAlert extends Component {
	render() {
		const defaultMessage = "We're sorry. Something went wrong. Please try again.";
		const displayMessage = this.props.message === "" ? defaultMessage : this.props.message;
		return(
			<div className="alert alert-danger alert-dismissible" role="alert">
				<button 
					type="button" 
					className="close" 
					data-dismiss="alert" 
					aria-label="Close"
					onClick={() => this.props.closeAlert()}
				>
					<span aria-hidden="true">&times;</span>
				</button>
				<h4 className="alert-heading">Error:</h4>
				<p>{displayMessage}</p>
			</div>
		);
	}
}

export default ErrorAlert;
