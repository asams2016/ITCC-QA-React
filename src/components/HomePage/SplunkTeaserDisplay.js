import React, {Component} from 'react';
import splunkLogo from "../../images/splunk-logo.svg";
import "./HomePage.css";
import {connect} from 'react-redux';
import changePage from '../../redux/actions/changePage';

// This is the display that links the the about splunk page
class SplunkTeaserDisplay extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(newPage, e) {
		this.props.changeThePage(newPage);
	}

	render() {
		return(
			<div className="display-section container-fluid">
				<div 
					className="row" 
					style={{
						backgroundColor: "black", 
						paddingLeft: "50px",
						paddingRight: "50px",
						paddingTop: "100px",
						paddingBottom: "100px"
					}}
				>
					<div className="col-sm-4 col-md-4 col-lg-4">
						<img 
							width="100%" 
							height="auto" 
							src={splunkLogo} 
							alt=""
						/>
					</div>
					<div className="col-sm-8 col-md-8 col-lg-8">
						<p style={{color: "white"}}>
							Do you have machine data, but no good way to process it?
						</p>
						<p style={{color: "white"}}>
							Would your team benefit from dashboards monitoring your data and
							using machine learning to alert on anomalies?
						</p>
						<p style={{color: "white"}}>
							FedEx now has Splunk functionality to ingest and analyze data.
						</p>
						<span className="change-page">
							<button 
								style={{
									backgroundColor: "#35c433", 
									color: "white"
								}} 
								className="btn"
								onClick={(e) => this.handleClick("aboutSplunk", e)}
							>
								Click here to learn more
							</button>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeThePage: (newPage) => {
			dispatch(changePage(newPage));
		}
	};
}

export default connect(null, mapDispatchToProps)(SplunkTeaserDisplay);

//export default SplunkTeaserDisplay;
