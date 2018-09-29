import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import DataOnboardingPage from "../DataOnboardingPage";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<DataOnboardingPage />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<DataOnboardingPage testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders a header', () => {
		const wrapper = mount(<DataOnboardingPage store={store} />);
		expect(wrapper.find('h2')).to.have.lengthOf(1);
	});

	it('renders two paragraphs', () => {
		const wrapper = mount(<DataOnboardingPage store={store} />);
		expect(wrapper.find('p')).to.have.lengthOf(2);
	});

	it('renders <DataOnboardingForm />', () => {
		const wrapper = mount(<DataOnboardingPage store={store} />);
		expect(wrapper.find('DataOnboardingForm')).to.have.lengthOf(1);
	});
});

