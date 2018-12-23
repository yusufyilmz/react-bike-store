


import React from 'react';
import Input from '../Input';
import { Form } from './style';
import BikeFilterContainer from '../../containers/bikeFilterContainer'

const UserInput = () => {
    return (
        <BikeFilterContainer>
            {({description, dateFrom, dateTo, changeDescription, changeDateFrom, changeDateTo, filterStolenBikes }) => (
                <Form onSubmit={filterStolenBikes}>
                    <Input
                        type="text"
                        name="company"
                        placeHolder="Search Case and descriptions"
                        width={230}
                        value={description}
                        onChange={changeDescription}
                        required={true} />
                    <Input
                        type="date"
                        name="startDate"
                        text="from: "
                        value={dateFrom}
                        onChange={changeDateFrom}
                        required={true} />
                    <Input
                        type="date"
                        name="endDate"
                        text="to: "
                        value={dateTo}
                        onChange={changeDateTo}
                        required={true} />
                    <Input type="submit" value="Filter" />
                </Form>
            )}
        </BikeFilterContainer>

    );
}

export default UserInput;