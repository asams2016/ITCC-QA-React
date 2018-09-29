import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import Footer from "../Footer";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<Footer />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<Footer testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders three headers', () => {
		const wrapper = mount(<Footer store={store} />);
		expect(wrapper.find('.footerHeader')).to.have.lengthOf(3);
	});

	it('renders nine footer links', () => {
		const wrapper = mount(<Footer store={store} />);
		expect(wrapper.find('.footerText')).to.have.lengthOf(9);
	});

	it('renders five icons', () => {
		const wrapper = mount(<Footer store={store} />);
		expect(wrapper.find('i')).to.have.lengthOf(5);
	});
});

