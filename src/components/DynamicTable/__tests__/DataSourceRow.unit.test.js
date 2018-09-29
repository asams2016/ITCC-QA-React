import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import DataSourceRow from "../DataSourceRow";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<DataSourceRow />', () => {
	it('renders a table row', () => {
		const wrapper = mount(
			<table>
				<tbody>
					<DataSourceRow testProp='testPropVal' store={store} index={0} />
				</tbody>
			</table>
					
		);
		expect(wrapper.find('tr')).to.have.lengthOf(1);
	});

	it('renders seven columns', () => {
		const wrapper = mount(
			<table>
				<tbody>
					<DataSourceRow testProp='testPropVal' store={store} index={0} />
				</tbody>
			</table>
					
		);
		expect(wrapper.find('td')).to.have.lengthOf(7);
	});

	it('renders a delete icon that calls parents removeRow', () => {
		const removeRow = sinon.spy();
		const wrapper = mount(
			<table>
				<tbody>
					<DataSourceRow testProp='testPropVal' store={store} removeRow={removeRow} index={0} />
				</tbody>
			</table>
					
		);

		// Make sure there is an icon
		expect(wrapper.find('i')).to.have.lengthOf(1);

		// Simulate click
		wrapper.find('i').prop('onClick')();

		// Make sure the search function was called
		expect(removeRow).to.have.property('callCount', 1);
	});
});
