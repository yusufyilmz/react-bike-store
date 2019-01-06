

import React from 'react';
import {BikeImage}  from '../../components/BikeImage';
import { shallow } from 'enzyme'


describe('BikeImage component', () => {

    let value, wrapper;

    beforeEach(() => {
        value = 'test.png';
        wrapper = shallow(
            <BikeImage imageUrl={value} />
        );
    });

    test('renders element correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('renders image correctly', () => {
        expect(wrapper.find('img').prop('src')).toEqual(value);
    });
})

