import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "./HomePage.css";
import {connect} from 'react-redux';
import changePage from '../../redux/actions/changePage';
 
// This is the slide show gallery that takes
// the images in the gallery and the title as props
class Gallery extends React.Component {  
	handleClick(newPage, e) {
		this.props.changeThePage(newPage);
	}
	// Change the number of items in the gallery
	// based on the screen size
	responsive = {
		0: { items: 1 },
		600: { items: 2 },
		900: { items: 3 },
		1024: { items: 4 }
	};

	// Return the content for the gallery
	// For each image sent to the gallery
	// Return a div with a specific key
	// Containing the image
	galleryItems() {
		return (
			this.props.images.map((picture, i) => (
				<div key={`key-${i}`}><img src={picture} alt=""/></div>
			))
		)
	};
	
	render() {
		// Get the items for the gallery
		const items = this.galleryItems();
		
		return (
			<div className="display-section container-fluid">
				<h2 className="change-page" onClick={(e) => this.handleClick("news", e)}>{this.props.title}</h2>
				<AliceCarousel
					items={items}
					duration={400}
					autoPlay={true}
					startIndex = {1}
					fadeOutAnimation={true}
					mouseDragEnabled={true}
					playButtonEnabled={true}
					dotsDisabled={true}
					autoPlayInterval={2000}
					responsive={this.responsive}
					autoPlayActionDisabled={true}
				/>
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

export default connect(null, mapDispatchToProps)(Gallery);

//export default Gallery;
