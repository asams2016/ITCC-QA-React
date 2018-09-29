import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import ProjectsDisplay from "../ProjectsDisplay";
import store from '../../../redux/store';
import changePage from '../../../redux/actions/changePage';

chai.use(chaiEnzyme());

describe('<ProjectsDisplay />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<ProjectsDisplay testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders four images', () => {
		const wrapper = mount(<ProjectsDisplay store={store} />);
		expect(wrapper.find('img')).to.have.lengthOf(4);
	});

	it('renders four figure labels', () => {
		const wrapper = mount(<ProjectsDisplay store={store} />);
		expect(wrapper.find('.figure-label')).to.have.lengthOf(4);
	});

	it('has a title that links to projects page', () => {
		const dispatchSpy = sinon.spy(store, 'dispatch');
		const wrapper = mount(<ProjectsDisplay store={store} />);

		// Make sure there is one button
		expect(wrapper.find('h2')).to.have.lengthOf(1);

		// Simulate click
		wrapper.find('h2').prop('onClick')();

		// Make sure the right action was dispatched
		const expectedAction = changePage("projects");
		sinon.assert.calledWith(dispatchSpy, expectedAction);
	});
});

