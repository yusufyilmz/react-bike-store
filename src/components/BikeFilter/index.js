


import React from 'react';
import Input from '../Input';
import { Form } from './style';
import BikeFilterContainer from '../../containers/bikeFilterContainer'

const UserInput = () => {
    return (
        <BikeFilterContainer>
            {({ title, dateFrom, dateTo, changeTitle, changeDateFrom, changeDateTo, filterStolenBikes, activeBike }) => (

                !activeBike &&
                <Form onSubmit={filterStolenBikes}>
                    <Input
                        type="text"
                        name="company"
                        placeHolder="Search Case and descriptions"
                        width={230}
                        value={title}
                        onChange={changeTitle}
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