import React, {Component} from 'react';
import './DynamicTable.css';

class DataSourceRow extends Component {
	constructor(props){
		super(props);
		this.state = {
			hostname: "",
			environment: "",
			fullPath: "",
			timeZone: "",
			volPerDay: ""
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.values !== this.state){
			this.setState(nextProps.values);
		}
	}
	
	onTextChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		}, () => {this.props.sendData(this.state,this.props.index)});
	}

	render() {
		return(
			<tr>
				<td><span className="rowNumber" >{this.props.index + 1}</span></td>
				<td>
					<input type="text" className="form-control" name="hostname" 
						onChange={(e) => this.onTextChange(e)} placeholder="drh00235.ute.fedex.com" value={this.state.hostname} />
				</td>
				<td>
					<select name="environment" className="form-control" onChange={(e) => this.onTextChange(e)} value={this.state.environment}>
                                                <option value="" disabled>Select one</option>
                                                <option value="Dev/Test">Dev/Test</option>
                                                <option value="Prod">Production</option>
                                        </select>
				</td>
				<td>
					<input type="text" className="form-control" name="fullPath" 
						onChange={(e) => this.onTextChange(e)} 
						placeholder="/var/log/messages"  value={this.state.fullPath} />
				</td>
				<td>
					<input type="text" className="form-control" name="timeZone" 
						onChange={(e) => this.onTextChange(e)} placeholder="CDT" value={this.state.timeZone} />
				</td>
				<td>
					<input type="text" className="form-control" name="volPerDay" 
						onChange={(e) => this.onTextChange(e)} placeholder="1.5 GB" value={this.state.volPerDay} />
				</td>
				<td><i className="fa fa-minus-circle" style={{color: 'red', marginLeft: 5, marginTop: 5, fontSize: 20, cursor: "pointer"}} onClick = {(index) => this.props.removeRow(this.props.index)} /></td>
			</tr>
		);
	}
}

export default DataSourceRow;
