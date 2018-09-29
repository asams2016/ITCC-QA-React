import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import LargeBanner from "../LargeBanner";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<LargeBanner />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<LargeBanner testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders one image', () => {
		const wrapper = mount(<LargeBanner store={store} />);
		expect(wrapper.find('img')).to.have.lengthOf(1);
	});

	it('renders one h1', () => {
		const wrapper = mount(<LargeBanner store={store} />);
		expect(wrapper.find('h1')).to.have.lengthOf(1);
	});
});
