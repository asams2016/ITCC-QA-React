/*
   The DataParser component is a file uploader that takes the following props:
   	* upload: function that passes data to parent component
	* isRequired: boolean that determines if the file must be uploaded
	* allowedFiles: string of file extensions allowed
   This component has the following variables in its state:
   	* hasFile: a boolean value for whether a file has been uploaded

   This allows the user to upload a file. If the file is .csv, .xls, or .xlsx,
   then the file is parsed. Otherwise, it is uploaded as is.

   If the file is required and there has not been a file uploaded yet, then it
   will have a orange outline to indicate that it is required.
*/

// Import
import React, { Component } from 'react';
import XLSX from 'xlsx';


class DataParser extends Component {
	// Do the default constructor and set up
	// the state which holds a boolean for whether
	// or not the file has been uploaded
  	constructor(props) {
    		super(props);

		this.state = {
			hasFile: false
		};

    		this.updateData = this.updateData.bind(this);
  	}

	// Call the updateFileName function to set the text box 
	// Then get the file from the file input element
	// Parse the file if there was a file uploaded
	// If the file is .csv then use papaparse to parse the file
	// If the file is .xlsx or .xls then read as a binary string 
	// using FileReader
	// Update the hasFile state variable to whether a file has
	// been uploaded
	parseData(e) {
		this.updateFileName();
		var file = this.refs.fileID.files[0];
		if(file.value !== "") {
			this.setState({
				hasFile: true
			});

			if (file.name.includes('.csv')){
				var Papa = require("papaparse/papaparse.min.js");
				Papa.parse(file, {
					header: true,
					download: true,
					skipEmptyLines: true,
					complete: this.updateData
				});
			} else if(file.name.includes('.xlsx') || file.name.includes('.xls')){	
				const reader = new FileReader();
				reader.onload = (e) => {
					const bstr = e.target.result;
					const wb = XLSX.read(bstr, {type:'binary'});
					const wsname = wb.SheetNames[0];
					const ws = wb.Sheets[wsname];
					// eslint-disable-next-line
					const conversion = XLSX.utils.sheet_to_json(ws);
				};
				reader.readAsBinaryString(file);
			} else {
				this.updateData({
					data: file		
				});
			}
		} else {
			this.setState({
				hasFile: false		
			});
		}
	}

	// Set the text in the box next to the file upload button
	// to the name of the file to indicate that the file was 
	// uploaded
	// The value is an array with a path like C:\text\text\text
	// so split by \ and then get the last item which should be
	// the file name and set the text box value
	updateFileName() {
		const pathArray = this.refs.fileID.value.split('\\');
		const fileName = pathArray[pathArray.length-1];
		this.refs.uploadFile.value = fileName;
	}

	// Send the data to the parent component using the
	// upload function sent as props
  	updateData(result) {
    		this.props.upload(result.data);
  	}

	// Render an upload button with a disabled text box that
	// holds the file name once a file is uploaded
	// If the file is required in the form and there hasn't 
	// been one uploaded yet, then it should be orange
	render() {
		var invalidStyle = {};

		if(this.props.isRequired && !this.state.hasFile){
			invalidStyle = {
				outline: "none",
				borderColor: "#FF6200",
				borderWidth: "2px",
				boxShadow: "0 0 3px #FF6200"
			}
		}
		return( 
			<div>
				<div className="fileUpload btn"
					style={invalidStyle}
				>
					<span>Browse...</span>
					<input 
						type="file" 
						className="upload"
						name="data" 
						id="fileID"
						ref="fileID"
						onChange={(e) => (this.parseData(e))} 
						accept={this.props.allowedFiles}
					/>
				</div>
				<input 
					id="uploadFile" 
					ref="uploadFile"
					placeholder="Choose File" 
					disabled="disabled" 
				/>
			</div>
		);
  	}
}

export default DataParser;
