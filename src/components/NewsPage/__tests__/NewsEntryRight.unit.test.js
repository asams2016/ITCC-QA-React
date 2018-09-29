import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import NewsEntryRight from "../NewsEntryRight";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<NewsEntryRight />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<NewsEntryRight testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders one h3', () => {
		const wrapper = mount(<NewsEntryRight store={store} />);
		expect(wrapper.find('h3')).to.have.lengthOf(1);
	});

	it('renders one date', () => {
		const wrapper = mount(<NewsEntryRight store={store} />);
		expect(wrapper.find('.date')).to.have.lengthOf(1);
	});

	it('renders one image', () => {
		const wrapper = mount(<NewsEntryRight store={store} />);
		expect(wrapper.find('img')).to.have.lengthOf(1);
	});

	it('renders one body of text', () => {
		const wrapper = mount(<NewsEntryRight store={store} />);
		expect(wrapper.find('.text')).to.have.lengthOf(1);
	});
});

