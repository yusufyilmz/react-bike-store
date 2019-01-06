

import React from 'react';
import {BikeDetail} from '../../components/BikeDetail';
import { shallow } from 'enzyme'


describe('BikeDetail component', () => {

    let value, wrapper;

    beforeEach(() => {
        value = 'test';
        wrapper = shallow(
            <BikeDetail title={value} />
        );
    });

    test('renders element correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('renders strong correctly', () => {
        expect(wrapper.find('strong').text()).toContain(value);
    });
})
