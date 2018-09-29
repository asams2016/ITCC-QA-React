import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import SuccessAlert from "../SuccessAlert";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<SuccessAlert />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<SuccessAlert testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders a button that closes the alert', () => {
		const closeClick = sinon.spy();
		const wrapper = mount(<SuccessAlert store={store} closeAlert={closeClick} />);

		// Make sure there is one button
		expect(wrapper.find('button')).to.have.lengthOf(1);

		// Simulate click
		wrapper.find('button').prop('onClick')();

		// Make sure the closeAlert function was called
		expect(closeClick).to.have.property('callCount', 1);
	});

	it('renders a header', () => {
		const wrapper = mount(<SuccessAlert store={store} />);
		expect(wrapper.find('h4')).to.have.lengthOf(1);
	});

	it('renders a message', () => {
		const wrapper = mount(<SuccessAlert store={store} />);
		expect(wrapper.find('p')).to.have.lengthOf(1);
	});
});
