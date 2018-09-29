import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import AppList from "../AppList";
import store from '../../../redux/store';
import {shallow} from 'enzyme';

chai.use(chaiEnzyme());

jest.mock('fs');

describe('<AppList />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<AppList 
			testProp='testPropVal' 
			store={store} 
			stageNames={['', '', '', '', '', '', '', '', '']}
			stageText={[]}
			applications={[{name:'', IP:'', stage:''}]}
		/>);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});
	
	it('renders same number of applications as in props', () => {
		const wrapper = mount(<AppList 
			store={store} 	
			stageNames={['', '', '', '', '', '', '', '', '']}
			stageText={[]}
			applications={[{name:'', IP:'', stage:''}]}
		/>);
		expect(wrapper.find('.list-group-item')).to.have.lengthOf(1);
	});
});
