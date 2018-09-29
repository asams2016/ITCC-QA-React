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
import ReviewChecklist from "../ReviewChecklist";
import store from '../../../redux/store';

chai.use(chaiEnzyme());

describe('<ReviewChecklist />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<ReviewChecklist testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders three `.checkbox`es', () => {
		const wrapper = mount(<ReviewChecklist store={store} />);
		expect(wrapper.find('.checkbox')).to.have.lengthOf(3);
	});

	it('renders one  `.btn`', () => {
		const wrapper = mount(<ReviewChecklist store={store} />);
		expect(wrapper.find('.btn')).to.have.lengthOf(1);
	});

	it('changes class of button when all boxes checked', () => {
		const wrapper = mount(<ReviewChecklist store={store} />)

		// Make sure that you can't proceed
		expect(wrapper.find('#conditional-submit').render().hasClass('noSubmit')).to.be.true;

		// Simulate checking boxes
		wrapper.find('#option1').simulate('change', { target: { name: "option1", checked: true } });
		wrapper.find('#option1').simulate('change', { target: { name: "option2", checked: true } });
		wrapper.find('#option1').simulate('change', { target: { name: "option3", checked: true } });

		// Make sure that you can proceed
		expect(wrapper.find('#conditional-submit').render().hasClass('submit')).to.be.true;		
	});
});

