import React, {Component} from 'react';
import "./Footer.css"

// This is the footer component that holds social media links 
// and links around the site
class Footer extends Component {
	// Render the content
	render() {
		// Define a colored line to divide the elements
		const ColoredLine = ({ color }) => (
		<hr
			style={{
				color: 'white',
				height: 0,
				marginLeft: "5%",
				marginRight: "5%",
				marginTop:20
			}}
		/>
		);
		return(
			<footer style={{marginTop: "100px"}}>
				
				<div 
					className="display-sec" 
					style={{
						backgroundColor: '#7b7e82'
					}}
				>
					
					{/* Site links */}
					<div className="container-fluid">
						<div 
							className="row" 
							style={{marginTop: 10, color: 'white'}}
						>
							<div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-md-offset-1 col-lg-offset-1">
								<h4 className="footerHeader">
									Our Company
								</h4>
								<p className="footerText">
									<a 
										href="http://about.fedex.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										About FedEx
									</a>
								</p>
								<p className="footerText">
									<a 
										href="http://about.van.fedex.com/our-story/company-structure/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Our Portfolio
									</a>
								</p>
								<p className="footerText">
									<a 
										href="http://www.fedex.com/us/investorrelations/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Investor Relations
									</a>
								</p>
								<p className="footerText">
									<a 
										href="https://careers.fedex.com/fedex/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Careers
									</a>
								</p>
							</div>
							<div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
								<h4 className="footerHeader">
									Useful Links
								</h4>
								<p className="footerText">
									<a 
										href="https://www.splunk.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Splunk Home
									</a>
								</p>
								<p className="footerText">
									<a 
										href="http://dev.splunk.com/restapi"
										target="_blank"
										rel="noopener noreferrer"
									>
										Splunk REST API Documentation
									</a>
								</p>
								<p className="footerText">
									<a 
										href="http://blogs.splunk.com/2012/03/19/embracing-excellence-splunk-best-practices-at-your-organization/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Splunk Best Practices
									</a>
								</p>
								<p className="footerText">
									<a 
										href="https://www.splunk.com/en_us/community.html"
										target="_blank"
										rel="noopener noreferrer"
									>
										Splunk Community
									</a>
								</p>
								<p className="footerText">
									<a 
										href="http://team.web.fedex.com/sites/rely/Best%20Practice%20Program/Best%20Practice%20Program.aspx"
										target="_blank"
										rel="noopener noreferrer"
									>
										RELY Team Best Practices
									</a>
								</p>
							</div>
						</div>
						<ColoredLine />
					</div>
					
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6  col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 mediaLinks">
							<span className="footerHeader" style={{marginRight: "15px"}}>Follow FedEx</span>
							{/* Facebook link */}
							<a 
								href="https://www.facebook.com/fedex/" 
								target="_blank"
								rel="noopener noreferrer"
							>
								<i 
									className="fa fa-facebook-official"
								/>
							</a>
							{/* Twitter link */}
							<a 
								href="https://www.twitter.com/fedex/" 
								target="_blank"
								rel="noopener noreferrer"
							>
								<i 
									className="fa fa-twitter-square"
								/>
							</a>
							{/* LinkedIn link */}
							<a 
								href="https://www.linkedin.com/company/fedex/" 
								target="_blank"
								rel="noopener noreferrer"
							>
								<i 
									className="fa fa-linkedin-square"
								/>
							</a>
							{/* Instagram link */}
							<a 
								href="https://www.instagram.com/fedex/?hl=en/" 
								target="_blank"
								rel="noopener noreferrer"
							>
								<i 
									className="fa fa-instagram"
								/>
							</a>	
							{/* YouTube link */}
							<a 
								href="https://www.youtube.com/fedex/" 
								target="_blank"
								rel="noopener noreferrer"
							>
								<i 
									className="fa fa-youtube-square"
								/>
							</a>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
