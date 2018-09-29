import React, {Component} from 'react';
import {connect} from 'react-redux';
import submitForm from '../../redux/actions/submitForm';
import "./DynamicTable.css"
import DataSourceRow from './DataSourceRow';

// This is a table with input fields in the columns
// Users can add and delete rows dynamically
class DynamicTable extends Component {
	// Define the initial state
	constructor(props){
		super(props);
		this.state = {
			dataSources: [{
				hostname: "",
				environment: "",
				fullPath: "",
				timeZone: "",
				volPerDay: ""
			}],
			numSources: 1
		}
	}

	// Add a row to the table
	addRow(e) {
		this.setState({
			// Increment the number of sources
			numSources: this.state.numSources + 1,
			// Add a new blank entry to the data sources array
			dataSources: [...this.state.dataSources, {
				hostname: "",
				environment: "",
				fullPath: "",
				timeZone: "",
				volPerDay: ""
			}]
		});
	}
	
	// Remove a row from the table
	removeRow(index) {
		// Create a copy of the data sources array
		let data = [...this.state.dataSources];
		// Remove the data from the deleted row
		data.splice(index,1);
		// Update the state
		this.setState({
			dataSources: data,
			numSources: this.state.numSources - 1
		});
	}

	// Get the data from the fields as they change
	getData(rowFields, index) {
		this.setState({
			// Concatenate the slice of the items before the given index,
			// the rowFields that are input, 
			// and the slice of the items after the given index
			dataSources: this.state.dataSources.slice(0,index).concat([rowFields], this.state.dataSources.slice(index+1))
		});
	}

	// Render the table
	render() {
		// Create an array for the individual rows
		var rows = [];
		for(var i = 0; i < this.state.numSources; i++){
			rows.push(
				<DataSourceRow 
					key={i} 
					index={i} 
					sendData={(rowFields, index) => this.getData(rowFields,index)}  
					values={this.state.dataSources[i]} 
					removeRow={(index) => this.removeRow(index)}
				/>
			);
		}

		return(
			<div className="row question">
				<div className="col-sm-11 col-md-11 col-lg-11">
					<table className="table table-striped table-bordered">
						<tbody>
							<tr>
								<th>#</th>
								<th>Hostname</th>
								<th>Environment</th>
								<th>Full Path to Logfile</th>
								<th>Time Zone</th>
								<th>Volume per Day</th>
							</tr>
							{rows}
						</tbody>
					</table>
					<span className="buttonText">Add row </span>
					<i className="fa fa-plus-circle fa-2x rowButton"  onClick={(e) => this.addRow(e)}/>
				</div>
			</div>
		);
	}
}

export default DynamicTable;
