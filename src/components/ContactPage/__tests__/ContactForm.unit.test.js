import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import ContactForm from "../ContactForm";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<ContactForm />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<ContactForm testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders five inputs and a textarea', () => {
		const wrapper = mount(<ContactForm store={store} />);
		expect(wrapper.find('input')).to.have.lengthOf(5);
		expect(wrapper.find('textarea')).to.have.lengthOf(1);
	});

	it('renders one  button', () => {
		const wrapper = mount(<ContactForm store={store} />);
		expect(wrapper.find('button')).to.have.lengthOf(1);
	});
});

