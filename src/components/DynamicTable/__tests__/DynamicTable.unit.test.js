import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import DynamicTable from "../DynamicTable";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<DynamicTable />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<DynamicTable store={store} testProp='testPropVal' />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders a table with six column headers', () => {
		const wrapper = mount(<DynamicTable store={store} />);
		expect(wrapper.find('table')).to.have.lengthOf(1);
		expect(wrapper.find('th')).to.have.lengthOf(6);
	});

	it('renders one row initially', () => {
		const wrapper = mount(<DynamicTable store={store} />);
		expect(wrapper.find('DataSourceRow')).to.have.lengthOf(1);
	});

	it('renders a plus icon that adds a row', () => {
		const wrapper = mount(<DynamicTable store={store} />);

		// Make sure there is an icon
		expect(wrapper.find('.fa-plus-circle')).to.have.lengthOf(1);

		// Simulate click
		wrapper.find('.fa-plus-circle').prop('onClick')();
		wrapper.update();

		// Make sure another row was added
		expect(wrapper.find('DataSourceRow')).to.have.lengthOf(2);
	});
});
