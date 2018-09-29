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
import TeamPage from "../TeamPage";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<TeamPage />', () => {
	it('allows us to set props', () => {
		const div = document.createElement('div');
		document.body.appendChild(div);
		const wrapper = mount(<TeamPage testProp='testPropVal' store={store} />, {attachTo: div });
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders eleven <TeamMemberEntry /> components', () => {
		const wrapper = mount(<TeamPage store={store} />);
		expect(wrapper.find('TeamMemberEntry')).to.have.lengthOf(11);
	});
});

