import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import DataOnboardingForm from "../DataOnboardingForm";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<DataOnboardingForm />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<DataOnboardingForm testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders seven questions', () => {
		const wrapper = mount(<DataOnboardingForm store={store} />);
		expect(wrapper.find('.question')).to.have.lengthOf(7);
	});

	it('renders four textboxes', () => {
		const wrapper = mount(<DataOnboardingForm store={store} />);
		expect(wrapper.find('[type="text"]')).to.have.lengthOf(4);
	});

	it('renders two radio buttons', () => {
		const wrapper = mount(<DataOnboardingForm store={store} />);
		expect(wrapper.find('[type="radio"]')).to.have.lengthOf(2);
	});

	it('renders two file inputs', () => {
		const wrapper = mount(<DataOnboardingForm store={store} />);
		expect(wrapper.find('DataParser')).to.have.lengthOf(2);
	});

	it('renders an example table and directions', () => {
		const wrapper = mount(<DataOnboardingForm store={store} />);
		expect(wrapper.find('#exampleTable')).to.have.lengthOf(1);
		expect(wrapper.find('.helpBlock')).to.have.lengthOf(2);
	});

	it('renders one text area', () => {
		const wrapper = mount(<DataOnboardingForm store={store} />);
		expect(wrapper.find('textarea')).to.have.lengthOf(1);
	});

	it('renders one button', () => {
		const wrapper = mount(<DataOnboardingForm store={store} />);
		expect(wrapper.find('button')).to.have.lengthOf(1);
	});

	it('pops up an error message if fields not filled out', () => {
		const wrapper = mount(<DataOnboardingForm store={store} />);

		// Click submit button
		wrapper.find('button').simulate('click', {target: {preventDefault: () => {}}});

		// Expect error message to pop up
		expect(wrapper.find('.alert-danger')).to.have.lengthOf(1);
	});

	it('removes error message if fields change', () => {
		const wrapper = mount(<DataOnboardingForm store={store} />);
		
		// Click submit button
		wrapper.find('button').simulate('click', {target: {preventDefault: () => {}}});

		// Expect error message to pop up
		expect(wrapper.find('.alert-danger')).to.have.lengthOf(1);

		// Click a radio button
		wrapper.find('#data-masking-yes').simulate('change', { target: { name: "needDataMasking"} });

		// Expect the error message to go away
		expect(wrapper.find('.alert-danger')).to.have.lengthOf(0);
	});
});

