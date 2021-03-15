import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { PersonList } from './PersonList';

describe('App', () => {

    let appWrapper;

    beforeAll(() => {
        appWrapper = shallow(<App />);
    })

    it('Renders a Person list', () => {
        const personList = appWrapper.find(PersonList);

        expect(personList).toHaveLength(1);
    })

    it('Has State', () => {
        const appState = appWrapper.state();

        expect(appState).not.toBeNull();
    })

    it('Has property called People', () => {
        const appState = appWrapper.state();

        expect(appState.people).toBeDefined;
    })

    it('Passes people property of state to PersonList as Props', () => {
        const personList = appWrapper.find(PersonList);

        expect(personList.props().people).toEqual(appWrapper.state().people);
    })
})