import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
	Navbar,
	Nav,
	NavItem,
	MenuItem,
	NavDropdown
} from 'react-bootstrap';
import changePage from '../../redux/actions/changePage';
import './NavigationBar.css';
import logo from '../../images/logo.png';

// This holds the navigation bar for each page
class NavigationBar extends Component {
	// Change the page whenever a link is clicked
	handleClick(newPage, e) {
		this.props.changePage(newPage);
	}

	render() {
		return(
			<div>
				<Navbar collapseOnSelect fixedTop inverse style={{backgroundImage: "none", backgroundColor: "#4D148C"}}>
					<Navbar.Header>
						<Navbar.Brand style={{marginTop: "10px"}}>
							<a 
								href="https://home.fedex.com" 
								target="_blank" 
								rel="noopener noreferrer"
							>
								<img 
									alt="FedEx" 
									className="nav-logo" 
									src={logo} 
									style={{
										height: "120%", 
										width: "auto", 
										paddingRight: "20px",
										paddingBottom: "4px"
									}}
								/>
							</a>
							<span 
								className="whiteText"
								id="nav-brand"
								onClick={(e) => this.handleClick("home", e)}
								style={{
									fontSize: "16pt",
									cursor: "pointer"
								}}
							>
								ITCC
							</span>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem 
								eventKey={1} 
								onClick={(e) => this.handleClick("home", e)} 
								className="nav-item"
							>
								<span className="whiteText">Home</span>
							</NavItem>
							<NavDropdown 
								eventKey={2} 
								title={<span className="whiteText">Tools</span>}
								id="basic-nav-dropdown" 
								className="nav-item"
							>
								<MenuItem 
									eventKey={2.1} 
									onClick={(e) => this.handleClick("aboutSplunk", e)}
								>
									Data Onboarding
								</MenuItem>
								<MenuItem 
									eventKey={2.2} 
									onClick={(e) => this.handleClick("serviceMapping", e)}
								>
									Service Mapping
								</MenuItem>
								<MenuItem
									eventKey={2.3}
									onClick={(e) => this.handleClick("appProgress", e)}
								>
									Application Progress
								</MenuItem>
							</NavDropdown>
							<NavItem 
								eventKey={3} 
								onClick={(e) => this.handleClick("news", e)} 
								className="nav-item"
							>
								<span className="whiteText">News</span>
							</NavItem>
							<NavItem 
								eventKey={3} 
								onClick={(e) => this.handleClick("projects", e)} 
								className="nav-item"
							>
								<span className="whiteText">Projects</span>
							</NavItem>
							<NavItem 
								eventKey={5} 
								onClick={(e) => this.handleClick("team", e)} 
								className="nav-item"
							>
								<span className="whiteText">Team</span>
							</NavItem>
							<NavItem 
								eventKey={7} 
								onClick={(e) => this.handleClick("contact", e)} 
								className="nav-item"
							>
								<span className="whiteText">Contact</span>
							</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changePage: (newPage) => {
			dispatch(changePage(newPage));
		}
	};
}

export default connect(null, mapDispatchToProps)(NavigationBar);
