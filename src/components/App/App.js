import React, { Component } from 'react';
import {connect} from 'react-redux';
import ScrollUpButton from "react-scroll-up-button";

//------------------------------------------------------------------------
// Import components

// Base
import NavigationBar from "../NavigationBar/NavigationBar";
import LargeBanner from "../BannerTitle/LargeBanner";
import GradientBanner from "../BannerTitle/GradientBanner";
import StickyButton from "../StickyButton/StickyButton";
import Footer from "../Footer/Footer";

// Content
import DataOnboardingPage from "../DataOnboardingPage/DataOnboardingPage";
import HomePage from "../HomePage/HomePage";
import AboutSplunkPage from "../AboutSplunkPage/AboutSplunkPage";
import ServiceMappingPage from "../ServiceMappingPage/ServiceMappingPage";
import SearchBar from "../SearchBar/SearchBar";
import NewsPage from "../NewsPage/NewsPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import TeamPage from "../TeamPage/TeamPage";
import ContactPage from "../ContactPage/ContactPage";
import AppProgressPage from "../AppProgress/AppProgressPage";

//------------------------------------------------------------------------
// Import page images
import homeImage from '../../images/banners/homeBannerBig.png';
import projectsImage from '../../images/banners/laptop.jpg';
import contactImage from '../../images/banners/phone-and-laptop.jpg';
import teamImage from '../../images/banners/people-at-table.jpg';
import newsImage from '../../images/banners/tablet.jpg';
import dataOnboardingImage from '../../images/banners/data-onboarding.jpg';

//------------------------------------------------------------------------
// Set page titles
const defaultTitle = "IT Command Center";
const formTitle = "Onboarding Form";
const newsTitle = "News";
const projectsTitle = "Projects";
const teamTitle = "Our Team";
const contactTitle = "Contact Us";

//------------------------------------------------------------------------
// This is the container for the entire app
class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			banner: <LargeBanner image={homeImage} title={defaultTitle} />,
			content: <HomePage store={this.props.store} />
		};
	}

	componentWillReceiveProps(newProps) {
		window.scrollTo(0, 0);
		this.renderContent(newProps.page);
	}

	// Scroll to the top of the page when the page changes
	componentDidUpdate() {
		window.scrollTo(0, 0);
	}
	// Render the actual content of the page based on what the page is
  	renderContent(page) {
		switch(page){
			case "home":
				this.setState({
					banner: <LargeBanner image={homeImage} title={defaultTitle} />,
					content: <HomePage store={this.props.store} />
				});
				break;
			case "aboutSplunk":
				this.setState({
					banner: <div />,
					content: <AboutSplunkPage store={this.props.store} />
				});
				break;
			case "dataOnboarding":
				this.setState({
					banner: <LargeBanner image={dataOnboardingImage} title={formTitle} />,
					content: <DataOnboardingPage store={this.props.store} />
				});
				break;
			case "serviceMapping":
				this.setState({
					banner: <GradientBanner
							colors={["#FFCC00", "#FF6200"]}
							title={<SearchBar />}
						/>,
					content: <ServiceMappingPage store={this.props.store} />
				});
				break;
			case "news":
				this.setState({
					banner: <LargeBanner image={newsImage} title={newsTitle} />,
					content: <NewsPage store={this.props.store} />
				});
				break;
			case "projects":
				this.setState({
					banner: <LargeBanner image={projectsImage} title={projectsTitle} />,
					content: <ProjectsPage store={this.props.store} />
				});
				break;
			case "team":
				this.setState({
					banner: <LargeBanner image={teamImage} title={teamTitle} />,
					content: <TeamPage store={this.props.store} />
				});
				break;
			case "contact":
				this.setState({
					banner: <LargeBanner image={contactImage} title={contactTitle} />,
					content: <ContactPage store={this.props.store} />
				});
				break;
			case "appProgress":
				this.setState({
					banner: <div />,
					content: <AppProgressPage store={this.props.store} />
				});
				break;
			default:
				this.setState({
					banner: <LargeBanner image={homeImage} title={defaultTitle} />,
					content: <HomePage store={this.props.store} />
				});
		}
  	}

  	render() {
    		return (
		    	<div store={this.props.store} height="100%">
      				<NavigationBar store={this.props.store} />
				{this.state.banner}
				{/* If the page isn't the data onboarding page then add the */}
				{/* the sticky button linking to it */}
				{this.props.page !== "dataOnboarding" && this.props.page !== "aboutSplunk" && <StickyButton store={this.props.store} />}
				{/* Render the content of the page based on current page */}
				{this.state.content}
				{/* Scroll to top of page button */}
				<ScrollUpButton
					style={{
						borderRadius: 50,
						paddingLeft: 4,
						backgroundColor: '#4D148C'
					}}
				/>
				<Footer />
			</div>
    		);
  	}
}

// Make the page property of the overall state
// be a prop called page
const mapStateToProps = (state) => {
	return {
		page: state.page
	};
}

export default connect(mapStateToProps, null)(App);
