import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import ContactPage from "../ContactPage";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<ContactPage />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<ContactPage testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders a header', () => {
		const wrapper = mount(<ContactPage store={store} />);
		expect(wrapper.find('h2')).to.have.lengthOf(1);
	});

	it('renders one paragraph', () => {
		const wrapper = mount(<ContactPage store={store} />);
		expect(wrapper.find('p')).to.have.lengthOf(1);
	});

	it('renders <ContactForm />', () => {
		const wrapper = mount(<ContactPage store={store} />);
		expect(wrapper.find('ContactForm')).to.have.lengthOf(1);
	});
});
