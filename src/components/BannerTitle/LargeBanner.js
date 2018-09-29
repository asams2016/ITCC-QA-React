import React, {Component} from 'react';
import './BannerTitle.css';

// This holds the banner for each page which include an image and a title
// The title and image can change based on the page
class LargeBanner extends Component {
	// Render the banner image and title
	render() {
		return(
        		<div className="text-center title">
          			<img 
					src={this.props.image} 
					alt="" 
					className="banner-image" 
					style={{
						width: "100%",
						height: "10%",
						marginTop: 20	
					}}
				/>
				<h1 className="centered-title-white">{this.props.title}</h1>
        		</div>
		);
	}
}

export default LargeBanner;
