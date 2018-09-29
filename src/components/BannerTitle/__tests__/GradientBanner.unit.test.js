import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import GradientBanner from "../GradientBanner";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<GradientBanner />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<GradientBanner testProp='testPropVal' store={store} colors={[]} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders a largeTitle', () => {
		const wrapper = mount(<GradientBanner store={store} colors={[]} />);
		expect(wrapper.find('.largeTitle')).to.have.lengthOf(1);
	});
});
