import React, {Component} from 'react';
import {connect} from 'react-redux';
import changePage from '../../redux/actions/changePage';
import './HomePage.css';
import missionImage from '../../images/mission-image.png'

// This holds a picture and the mission statement
class MissionStatement extends Component {
	render() {
		return(
			<div className="display-section">
				<div className="row">
					<div className="col-sm-6 col-md-4 col-lg-4 col-md-offset-2 col-lg-offset-2">
						<img 
							src={missionImage} 
							alt="IT Command Center"
							width="100%"
						/>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<h3>Who are we?</h3>
						<p>
							The ITCC is an all OpCo critical-business focused IT operations organization dedicated to:
						</p>
						<ul>
							<li>Critical incident management and communications</li>
							<li>Proactive and reactive infrastructure triage and impact mitigation</li>
							<li>EIS operations improvement</li>
						</ul>
						<p>
							If you have a business impacting event which impedes or risks service of online services,
							package movement, flight/hub operations, or retail/customer/revenue services, please
							get in touch to allow the ITCC to assist.
						</p>
						<button 
							className="btn"
							style={{
								background: "transparent", 
								borderColor: "#4D148C", 
								color: "#4D148C", 
								borderWidth: "2px",
								fontSize: "14pt", 
								width: "150px", 
								marginLeft: "27%"
							}}
							onClick={() => this.props.changePage("contact")}
						>
							Get in Touch
						</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changePage: (newPage) => {
			dispatch(changePage(newPage))	  
		}			
	};
};

export default connect(null,mapDispatchToProps)(MissionStatement);
