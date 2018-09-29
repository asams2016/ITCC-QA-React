import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import SearchBar from "../SearchBar";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<SearchBar />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<SearchBar testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders an input that updates text in parent onChange', () => {
		const textChange = sinon.spy();
		const wrapper = mount(<SearchBar store={store} textChange={textChange} />);

		// Make sure there is an input
		expect(wrapper.find('input')).to.have.lengthOf(1);

		// Simulate change
		wrapper.find('input').prop('onChange')();

		// Make sure the textChange function was called
		expect(textChange).to.have.property('callCount', 1);
	});

	it('renders a button that uses parent search onClick', () => {
		const search = sinon.spy();
		const wrapper = mount(<SearchBar store={store} search={search} />);

		// Make sure there is a button
		expect(wrapper.find('button')).to.have.lengthOf(1);

		// Simulate click
		wrapper.find('button').prop('onClick')();

		// Make sure the search function was called
		expect(search).to.have.property('callCount', 1);
	});

	it('runs search when enter is pressed', () => {
		const search = sinon.spy();
		const wrapper = mount(<SearchBar store={store} search={search} />);

		// Simulate enter press
		wrapper.find('input').simulate('keypress', {key: 'Enter'})

		// Make sure the closeAlert function was called
		expect(search).to.have.property('callCount', 1);
	});
});
