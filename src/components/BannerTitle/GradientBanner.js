import React, {Component} from 'react';
import './BannerTitle.css';

// This holds the banner for each page which include an image and a title
// The title and image can change based on the page
class GradientBanner extends Component {
	// Render the banner gradient and title
	render() {
		// Generate the string of colors from input array
		var colorsString = this.props.colors[0];

		for(var i = 1; i < this.props.colors.length; i++){
			colorsString += ", " + this.props.colors[i];
		}

		// Define the gradient background
		const style = {
			marginTop: "2%",
			background: this.props.color1, /* fallback for old browsers */
			// eslint-disable-next-line
			background: "-webkit-linear-gradient(to right, " + colorsString + ")", /* Chrome 10-25, Safari 5.1-6 */
			// eslint-disable-next-line
			background: "linear-gradient(to right, " + colorsString + ")" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
			
		};
		return(
        		<div 
				className="text-center title"
				style={style}
			>
				<h1 className="largeTitle">{this.props.title}</h1>
        		</div>
		);
	}
}

export default GradientBanner;
