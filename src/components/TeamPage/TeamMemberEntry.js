import React, {Component} from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import './TeamMemberEntry.css';

// This is a single team member entry
// with a picture and bio
// popover display extended info on team member
class TeamMemberEntry extends Component {
	constructor(props, context) {
		super(props);
	  
		this.toggle = this.toggle.bind(this);
		this.state = {
			popoverOpen: false,
		};	
	}
	
	//shows or hides the popover when team image clicked
	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}
		
	//Renders an image of each team member with contact info, clicking the image renders
	//a popover that shows additional information on the team member
	render(){
		const phoneRef = "tel:" + this.props.phone;
		const emailRef = "mailto:" + this.props.email;

		return(
			<div>
				<div style={{paddingTop: "5%"}} className="col-sm-4 col-md-4 col-lg-4">
					<img
						className="imgCircle"
						src={this.props.image}
						alt=""
						width="50%"
						onClick={this.toggle}
						id={"popover-" + this.props.id}
						
					/>
					<h3 id="name" className="centerAlign">{this.props.name}</h3>
					<h4 id="jobTitle" className="centerAlign">{this.props.title}</h4>
					<Popover 
						id="popover" 
						className="pop" 
						placement="left" 
						isOpen={this.state.popoverOpen} 
						target={"popover-" + this.props.id} 
						toggle={this.toggle} 
					>
						<PopoverHeader className="centerAlign"> 
							{this.props.name}
							<a 
								href={emailRef} 
								target="_blank"
								rel="noopener noreferrer"
							>
								<i
									style={{paddingLeft: "2%"}}
									className="fa fa-envelope" 
								/>
							</a>
						</PopoverHeader>
						<PopoverBody> 
							<img 
								src={this.props.image} 
								className="popoverImg" alt="" 
								width="75%" 
							/>
							<div className="popoverTitle">
								<strong>{this.props.title}</strong>
								<div>Phone: <a href={phoneRef}>{this.props.phone}</a></div>
							</div>
							<div className="popoverInfo">
								{this.props.personalInfo}
							</div>
						</PopoverBody>
					</Popover>
				</div>
			</div>
		);
	}
}

export default TeamMemberEntry;
