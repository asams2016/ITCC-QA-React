import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import HomePage from "../HomePage";
import store from '../../../redux/store';
import changePage from '../../../redux/actions/changePage';

chai.use(chaiEnzyme());

describe('<HomePage />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<HomePage testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders a <MissionStatement />', () => {
		const wrapper = mount(<HomePage store={store} />);
		expect(wrapper.find('MissionStatement')).to.have.lengthOf(1);
	});

	it('renders a <Gallery />', () => {
		const wrapper = mount(<HomePage store={store} />);
		expect(wrapper.find('Gallery')).to.have.lengthOf(1);
	});

	it('renders a <ProjectsDisplay />', () => {
		const wrapper = mount(<HomePage store={store} />);
		expect(wrapper.find('ProjectsDisplay')).to.have.lengthOf(1);
	});

	it('renders a <SplunkTeaserDisplay />', () => {
		const wrapper = mount(<HomePage store={store} />);
		expect(wrapper.find('SplunkTeaserDisplay')).to.have.lengthOf(1);
	});
});

