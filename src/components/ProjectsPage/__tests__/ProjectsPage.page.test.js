import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import ProjectsPage from "../ProjectsPage";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<ProjectsPage />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<ProjectsPage testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders 2 `h2`s', () => {
		const wrapper = mount(<ProjectsPage store={store} />);
		expect(wrapper.find('h2')).to.have.lengthOf(2);
	});

	it('renders 2 `p`s', () => {
		const wrapper = mount(<ProjectsPage store={store} />);
		expect(wrapper.find('p')).to.have.lengthOf(2);
	});
});

