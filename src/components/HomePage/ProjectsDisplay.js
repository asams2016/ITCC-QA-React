import React, {Component} from 'react';
import projectPicture from "../../images/project1.png";
import "./HomePage.css";
import {connect} from 'react-redux';
import changePage from '../../redux/actions/changePage';

// This is a static display for the projects
// This contains images and headers
class ProjectsDisplay extends Component {
	handleClick(newPage, e) {
		this.props.changeThePage(newPage);
	}

	render() {
		return(
			<div className="display-section container-fluid">
				<h2 className="content-header change-page" onClick={(e) => this.handleClick("projects", e)}>Our Projects</h2>
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-3">
						<img src={projectPicture} alt="" />
						<p className="figure-label">Project 1</p>
					</div>
					<div className="col-sm-3 col-md-3 col-lg-3">
						<img src={projectPicture} alt="" />
						<p className="figure-label">Project 2</p>
					</div>
					<div className="col-sm-3 col-md-3 col-lg-3">
						<img src={projectPicture} alt="" />
						<p className="figure-label">Project 3</p>
					</div>
					<div className="col-sm-3 col-md-3 col-lg-3">
						<img src={projectPicture} alt="" />
						<p className="figure-label">Project 4</p>
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

export default connect(null, mapDispatchToProps)(ProjectsDisplay);

//export default ProjectsDisplay;
