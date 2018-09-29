import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import Gallery from "../Gallery";
import store from '../../../redux/store';
import changePage from '../../../redux/actions/changePage';

chai.use(chaiEnzyme());

describe('<Gallery />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<Gallery testProp='testPropVal' store={store} images={[]}/>);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('has a title that links to news page', () => {
		const dispatchSpy = sinon.spy(store, 'dispatch');
		const wrapper = mount(<Gallery store={store} images={[]} />);

		// Make sure there is one button
		expect(wrapper.find('h2')).to.have.lengthOf(1);

		// Simulate click
		wrapper.find('h2').prop('onClick')();

		// Make sure the right action was dispatched
		const expectedAction = changePage("news");
		sinon.assert.calledWith(dispatchSpy, expectedAction);
	});

	it('renders an AliceCarousel element', () => {
		const wrapper = mount(<Gallery store={store} images={[]} />);
		expect(wrapper.find('AliceCarousel')).to.have.lengthOf(1);
	});
});

