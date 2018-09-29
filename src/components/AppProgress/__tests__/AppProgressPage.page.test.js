import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import AppProgressPage from "../AppProgressPage";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<AppProgressPage />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<AppProgressPage testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders <GradientBanner />', () => {
		const wrapper = mount(<AppProgressPage store={store} />);
		expect(wrapper.find('GradientBanner')).to.have.lengthOf(1);
	});

	it('renders <AppList />', () => {
		const wrapper = mount(<AppProgressPage store={store} />);
		expect(wrapper.find('AppList')).to.have.lengthOf(1);
	});
});
