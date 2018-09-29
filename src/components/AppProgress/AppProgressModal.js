import React, {Component} from 'react';
import { Modal } from 'react-bootstrap';
import './AppProgress.css';

//This component renders a searchbar that onChange of input filters a list of all the applications and renders the resulting filtered list
//The filtered list of applications rendered shows app name, a progressbar showing the relative stage in onboarding progress and a modal that shows the exact stage along with next steps
class AppProgressModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			show: true
		}
	}

	handleClose(e){
		this.setState({
			show: false
		});
		this.props.handleClose(e);
	}

	render() {
		const check =  "fa fa-check-circle-o modalImgCheck";
		const noCheck = "fa fa-circle-o modalImgCircle";
		var stageChecks = [];

		for(var i = 1; i < this.props.stageNames.length; i++){
			if(i <= this.props.stage){
				stageChecks.push(
					<div className="col-sm-1 col-md-1 col-lg-1 stage" style={{marginRight: 25}} key={i}>
						{this.props.stageNames[i]}
						<i className={check}></i>
					</div> 
				
				);
			} else {
				stageChecks.push(
					<div className="col-sm-1 col-md-1 col-lg-1 stage" style={{marginRight: 25}} key={i}>
						{this.props.stageNames[i]}
						<i className={noCheck}></i>
					</div> 
				
				);
			}
			
		}

		return( 
			 <Modal bsStyle="primary" bsSize="large" show={this.state.show} onHide={(e) => this.handleClose(e)}>
					<Modal.Header closeButton>
						<div className="row modalWindow">
							{stageChecks}
						</div>
					</Modal.Header>
					<Modal.Body>
						<p>
							{this.props.stageText[this.props.stage]}
						</p>
					</Modal.Body>
					<Modal.Footer>
						<button onClick={(e) => this.handleClose(e)}>Close</button>
					</Modal.Footer>
			</Modal>
		 );
	}
}
export default AppProgressModal;
