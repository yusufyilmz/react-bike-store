

import React from 'react';
import { Error } from '../../components/Error';
import { shallow } from 'enzyme'


describe('Error component', () => {

    let value, onChange, wrapper;

    beforeEach(() => {
        value = 'test';
        wrapper = shallow(
            <Error error={true}/>
        );
    });

    test('renders element correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('renders text correctly', () => {
        console.log(wrapper.find('div').text())
        expect(wrapper.find('div').text()).toContain('Ooops...');
    });
})
