import React, {Component} from 'react';

// This is a news entry where the image is on the left of the text
class NewsEntryLeft extends Component {
	render() {
		return(
			<div className="display-section" id={this.props.id}>
				<h3 className="content-header">{this.props.title}</h3>
				<p className="date"><em>{this.props.date}</em></p>
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-3">
						<img src={this.props.image} alt="" />
					</div>
					<div className="col-sm-9 col-md-9 col-lg-9">
						<p className="text">{this.props.text}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsEntryLeft;
