import React from 'react';
import {mount} from 'enzyme';
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import MissionStatement from "../MissionStatement";
import store from '../../../redux/store';
import changePage from '../../../redux/actions/changePage';

chai.use(chaiEnzyme());

describe('<MissionStatement />', () => {
	it('renders one image', () => {
		const wrapper = mount(<MissionStatement store={store} />);
		expect(wrapper.find('img')).to.have.lengthOf(1);
	});

	it('renders two p elements', () => {
		const wrapper = mount(<MissionStatement store={store} />);
		expect(wrapper.find('p')).to.have.lengthOf(2);
	});

  it('renders 3 li elements', () => {
		const wrapper = mount(<MissionStatement store={store} />);
		expect(wrapper.find('li')).to.have.lengthOf(3);
	});

	it('renders a button that changes the page', () => {
		const dispatchSpy = sinon.spy(store, 'dispatch');
		const wrapper = mount(<MissionStatement store={store} />);

		// Make sure there is one button
		expect(wrapper.find('button')).to.have.lengthOf(1);

		// Simulate click
		wrapper.find('button').simulate('click');

		// Make sure the right action was dispatched
		const expectedAction = changePage("contact");
		sinon.assert.calledWith(dispatchSpy, expectedAction);
	});
});
