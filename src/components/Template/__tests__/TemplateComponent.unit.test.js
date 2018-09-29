import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import TemplateComponent from "../TemplateComponent";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<TemplateComponent />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<TemplateComponent testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders two headers', () => {
		const wrapper = mount(<TemplateComponent store={store} />);
		expect(wrapper.find('h2')).to.have.lengthOf(2);
	});

	it('renders two paragraphs', () => {
		const wrapper = mount(<TemplateComponent store={store} />);
		expect(wrapper.find('p')).to.have.lengthOf(2);
	});
});

