import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import NewsPage from "../NewsPage";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<NewsPage />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<NewsPage testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders one h2', () => {
		const wrapper = mount(<NewsPage store={store} />);
		expect(wrapper.find('h2')).to.have.lengthOf(1);
	});

	it('renders two <NewsEntryLeft /> components', () => {
		const wrapper = mount(<NewsPage store={store} />);
		expect(wrapper.find('NewsEntryLeft')).to.have.lengthOf(2);
	});

	it('renders two <NewsEntryRight /> components', () => {
		const wrapper = mount(<NewsPage store={store} />);
		expect(wrapper.find('NewsEntryRight')).to.have.lengthOf(2);
	});
});

