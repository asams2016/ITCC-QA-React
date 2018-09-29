import React, {Component} from 'react';

// This is a news entry where the image is on the right
// of the text. This uses push and pull the move the image
// on larger screens, but make sure that the image is on
// top of the text on smaller screens.
class NewsEntryRight extends Component {
	render() {
		return(
			<div className="display-section" id={this.props.id}>
				<h3 className="content-header">{this.props.title}</h3>
				<p className="date"><em>{this.props.date}</em></p>
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-3 col-md-push-9 col-lg-push-9">
						<img src={this.props.image} alt="" />
					</div>
					<div className="col-sm-9 col-md-9 col-lg-9 col-md-pull-3 col-lg-pull-3">
						<p className="text">{this.props.text}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsEntryRight;
