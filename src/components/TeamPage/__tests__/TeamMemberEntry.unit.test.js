/*
   This mounts and tests the ReviewChecklist component to make sure:
   	* The button is originally greyed and disabled (noSubmit class)
	* Once all of the checkboxes are checked, the button changes to 
	  be enabled (submit class)
*/
import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import TeamMemberEntry from "../TeamMemberEntry";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<TeamMemberEntry />', () => {
	it('allows us to set props', () => {
		const div = document.createElement('div');
		document.body.appendChild(div);
		const wrapper = mount(<TeamMemberEntry testProp='testPropVal' store={store} />, { attachTo: div });
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders one image', () => {
		const wrapper = mount(<TeamMemberEntry store={store} />);
		expect(wrapper.find('img')).to.have.lengthOf(1);
	});

	it('renders a name, job title, email, and phone number', () => {
		const wrapper = mount(<TeamMemberEntry store={store} />);
		expect(wrapper.find('#name')).to.have.lengthOf(1);
		expect(wrapper.find('#jobTitle')).to.have.lengthOf(1);
	});
	
	it('renders a popover', () => {
		const wrapper = mount(<TeamMemberEntry store={store} />);
		expect(wrapper.find('Popover')).to.have.lengthOf(1);
	});
	
});

