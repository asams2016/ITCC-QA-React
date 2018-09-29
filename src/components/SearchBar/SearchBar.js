import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component{
	handleKeyPress = (e) => {
	  if(e.key === 'Enter'){
		this.props.search(e);
	  }
	}
	
	render(){
		return(
			<div className="row">
				<div className="col-sm-6 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
					<div className="input-group">
						<input 
							type="text" 
							className="form-control searchBox" 
							id="searchText"
							name="searchText"
							placeholder="Search for an app..." 
							onChange={(e) => this.props.textChange(e)}
							onKeyPress={(e) => this.handleKeyPress(e)}
						/>
						<span className="input-group-btn">
							<button 
								onClick={(e) => this.props.search(e)} 
								className="btn submit"
							>
								<i className="glyphicon glyphicon-search" />
							</button>
						</span>
					</div>
				</div>
			</div>
		);
	}
}
export default SearchBar;
