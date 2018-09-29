import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import AppProgressModal from "../AppProgressModal";
import store from '../../../redux/store';
import {shallow} from 'enzyme';

chai.use(chaiEnzyme());

jest.mock('fs');

describe('<AppProgressModal />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<AppProgressModal 
			testProp='testPropVal' 
			store={store} 
			stageNames={['', '', '', '', '', '', '', '', '']}
			stageText={[]}
		/>);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});
	
	it('renders eight stages', () => {
		const wrapper = mount(<AppProgressModal 
			store={store} 	
			stageNames={['', '', '', '', '', '', '', '', '']}
			stageText={[]}
		/>);
		expect(wrapper.find('.stage')).to.have.lengthOf(8);
	});
	
	it('calls parent handleClose on x click', () => {
		const closeClick = sinon.spy();
		const wrapper = mount(<AppProgressModal 
			store={store} 
			handleClose={closeClick} 
			stageNames={['', '', '', '', '', '', '', '', '']}
			stageText={[]}
		/>);

		wrapper.find('Modal').at(0).prop('onHide')();
		expect(closeClick).to.have.property('callCount', 1);
	});
	
	it('calls parent handleClose on button click', () => {
		const closeClick = sinon.spy();
		const wrapper = mount(<AppProgressModal 
			store={store} 
			handleClose={closeClick} 
			stageNames={['', '', '', '', '', '', '', '', '']}
			stageText={[]}
		/>);

		wrapper.find('button').at(0).prop('onClick')();
		expect(closeClick).to.have.property('callCount', 1);
	});
});
