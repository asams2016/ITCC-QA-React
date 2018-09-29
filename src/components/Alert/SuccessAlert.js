import React, {Component} from 'react';

// This is a template for a bootstrap alert
// on success response from server
class SuccessAlert extends Component {
	render() {
		return(
			<div className="alert alert-success alert-dismissible" role="alert">
				<button 
					type="button" 
					className="close" 
					data-dismiss="alert" 
					aria-label="Close"
					onClick={() => this.props.closeAlert()}
				>
					<span aria-hidden="true">&times;</span>
				</button>
				<h4 className="alert-heading">Success!</h4>
				<p>
					You're form has been succesfully submitted. Thanks!
				</p>
			</div>
		);
	}
}

export default SuccessAlert;
