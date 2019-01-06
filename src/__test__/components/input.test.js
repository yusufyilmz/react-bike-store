

import React from 'react';
import Input from '../../components/Input';
import { shallow } from 'enzyme'


describe('Input component', () => {

    let value, onChange, wrapper;

    beforeEach(() => {
        value = 'test';
        onChange = jest.fn();
        wrapper = shallow(
            <Input text="test" type='text' onChange={onChange} value={value} />
        );
    });

    test('renders element correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('renders onclick correctly', () => {
        wrapper.find('Input').simulate('change');
        expect(onChange.mock.calls.length).toEqual(1);

    });
})
