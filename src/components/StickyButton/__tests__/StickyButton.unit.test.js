import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import StickyButton from "../StickyButton";
import store from '../../../redux/store';
import changePage from '../../../redux/actions/changePage';

chai.use(chaiEnzyme());

describe('<StickyButton />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<StickyButton testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders a sticky-link that changes the page', () => {
		const dispatchSpy = sinon.spy(store, 'dispatch');
		const wrapper = mount(<StickyButton store={store} />);
		expect(wrapper.find('.sticky-link')).to.have.lengthOf(1);

		wrapper.find('.sticky-link').prop('onClick')();

		// Make sure the right action was dispatched
		const expectedAction = changePage("aboutSplunk");
		sinon.assert.calledWith(dispatchSpy, expectedAction);
	});
});

