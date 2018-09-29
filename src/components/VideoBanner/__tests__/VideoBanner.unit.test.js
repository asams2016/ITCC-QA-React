import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import VideoBanner from "../VideoBanner";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<VideoBanner />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<VideoBanner testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders a player-wrapper', () => {
		const wrapper = mount(<VideoBanner store={store} />);
		expect(wrapper.find('.player-wrapper')).to.have.lengthOf(1);
	});

	it('renders a ReactPlayer', () => {
		const wrapper = mount(<VideoBanner store={store} />);
		expect(wrapper.find('ReactPlayer')).to.have.lengthOf(1);
	});
});
