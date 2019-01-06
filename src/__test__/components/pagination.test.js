

import React from 'react';
import Pagination from '../../components/Pagination';
import { shallow } from 'enzyme'


describe('Pagination component', () => {

    let wrapper, pageCount;

    beforeEach(() => {
        pageCount = 1;
        wrapper = shallow(
            <Pagination pageCount={pageCount}  selectedPage={pageCount}/>
        );
    });

    test('renders element correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('renders onclick correctly', () => {
        expect(wrapper.find('a')).toHaveLength(3) 
    });
})
