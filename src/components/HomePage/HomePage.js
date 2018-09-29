import React, {Component} from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import "./HomePage.css";
import ProjectsDisplay from "./ProjectsDisplay";
import SplunkTeaserDisplay from "./SplunkTeaserDisplay";
import Gallery from "./Gallery";
import MissionStatement from "./MissionStatement";

// Import images for gallery
import news1 from "../../images/news4.jpg";
import news2 from "../../images/news2.jpg";
import news3 from "../../images/news4.jpg";
import news4 from "../../images/news2.jpg";
import news5 from "../../images/news4.jpg";
import news6 from "../../images/news2.jpg";

// Put the images into an array to send to the gallery
const images = [news1, news2, news3, news4, news5, news6];

// This is the container for all of the home page content
class HomePage extends Component {
	render() {
		return(
			<div className="container-fluid">
				<MissionStatement store={this.props.store} />
				<Gallery title="Latest News" images={images} store={this.props.store} />
				<ProjectsDisplay store={this.props.store} />
				<SplunkTeaserDisplay store={this.props.store} />
			</div>
		);
	}
}

export default HomePage;
