import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './VideoBanner.css';

// This is the container for the content on the
// About Splunk Page
class VideoBanner extends Component {
	render() {
		return(
			<div style={{backgroundColor: "black"}} className="player-wrapper">
				<ReactPlayer 
					url={this.props.url} 
					playing={true} 
					controls={true} 
					muted={true} 
					width="100%"
					height="100%"
					style={{paddingTop: "70px"}}
					className="react-player"
				/>
			</div>
		);
	}
}

export default VideoBanner;
