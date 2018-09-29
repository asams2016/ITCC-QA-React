import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import SplunkTeaserDisplay from "../SplunkTeaserDisplay";
import store from '../../../redux/store';
import changePage from '../../../redux/actions/changePage';

chai.use(chaiEnzyme());

describe('<SplunkTeaserDisplay />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<SplunkTeaserDisplay testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders one image', () => {
		const wrapper = mount(<SplunkTeaserDisplay store={store} />);
		expect(wrapper.find('img')).to.have.lengthOf(1);
	});

	it('renders three p elements', () => {
		const wrapper = mount(<SplunkTeaserDisplay store={store} />);
		expect(wrapper.find('p')).to.have.lengthOf(3);
	});

	it('renders a button that changes the page', () => {
		const dispatchSpy = sinon.spy(store, 'dispatch');
		const wrapper = mount(<SplunkTeaserDisplay store={store} />);

		// Make sure there is one button
		expect(wrapper.find('button')).to.have.lengthOf(1);

		// Simulate click
		wrapper.find('button').prop('onClick')();

		// Make sure the right action was dispatched
		const expectedAction = changePage("aboutSplunk");
		sinon.assert.calledWith(dispatchSpy, expectedAction);
	});
});

