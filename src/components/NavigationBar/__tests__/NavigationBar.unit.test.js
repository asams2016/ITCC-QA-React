import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from "sinon";
import NavigationBar from "../NavigationBar";
import store from '../../../redux/store';
import changePage from '../../../redux/actions/changePage';

chai.use(chaiEnzyme());


describe('<NavigationBar />', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<NavigationBar testProp='testPropVal' store={store} />);
		expect(wrapper.props().testProp).to.equal('testPropVal');
		wrapper.setProps({ testProp: 'newTestPropVal' });
		expect(wrapper.props().testProp).to.equal('newTestPropVal');
	});

	it('renders a nav-logo and nav-brand', () => {
		const wrapper = mount(<NavigationBar store={store} />);
		expect(wrapper.find('.nav-logo')).to.have.lengthOf(1);
		expect(wrapper.find('#nav-brand')).to.have.lengthOf(1);
	});

	it('renders five `NavItem`s', () => {
		const wrapper = mount(<NavigationBar store={store} />);
		expect(wrapper.find('NavItem')).to.have.lengthOf(5);
	});

	it('renders 3 `menuItem`s', () => {
		const wrapper = mount(<NavigationBar store={store} />);
		expect(wrapper.find('MenuItem')).to.have.lengthOf(3);
	})

	it('changes to correct page when nav items clicked', () => {
		const dispatchSpy = sinon.spy(store, 'dispatch');
		const wrapper = mount(<NavigationBar store={store} />);

		//Simulate click of home button
		wrapper.find('NavItem').at(0).prop('onClick')();
		// Make sure the right action was dispatched
		const expectedActionHome = changePage("home");
		sinon.assert.calledWith(dispatchSpy, expectedActionHome);

		//Simulate click of news button
		wrapper.find('NavItem').at(1).prop('onClick')();
		// Make sure the right action was dispatched
		const expectedActionNews = changePage("news");
		sinon.assert.calledWith(dispatchSpy, expectedActionNews);

		//Simulate click of projects button
		wrapper.find('NavItem').at(2).prop('onClick')();
		// Make sure the right action was dispatched
		const expectedActionProjects = changePage("projects");
		sinon.assert.calledWith(dispatchSpy, expectedActionProjects);

		//Simulate click of team button
		wrapper.find('NavItem').at(3).prop('onClick')();
		// Make sure the right action was dispatched
		const expectedActionTeam = changePage("team");
		sinon.assert.calledWith(dispatchSpy, expectedActionTeam);

		//Simulate click of contact button
		wrapper.find('NavItem').at(4).prop('onClick')();
		// Make sure the right action was dispatched
		const expectedActionContact = changePage("contact");
		sinon.assert.calledWith(dispatchSpy, expectedActionContact);


		// Tools dropdown menu
		//Simulate click of Data Onboarding
		wrapper.find('MenuItem').at(0).prop('onClick')();
		// Make sure the right action was dispatched
		const expectedActionSplunk = changePage("aboutSplunk");
		sinon.assert.calledWith(dispatchSpy, expectedActionSplunk);

		//Simulate click of Service Mapping
		wrapper.find('MenuItem').at(1).prop('onClick')();
		// Make sure the right action was dispatched
		const expectedActionMapping = changePage("serviceMapping");
		sinon.assert.calledWith(dispatchSpy, expectedActionMapping);

		//Simulate click of Application Progress
		wrapper.find('MenuItem').at(2).prop('onClick')();
		// Make sure the right action was dispatched
		const expectedActionProgress = changePage("appProgress");
		sinon.assert.calledWith(dispatchSpy, expectedActionProgress);
	});

});
