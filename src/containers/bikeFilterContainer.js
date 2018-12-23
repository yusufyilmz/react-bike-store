import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterStolenBikes } from '../actions';

class BikeFilterContainer extends Component {
    state = {
        description: '',
        dateFrom: '',
        dateTo: '',
    }

    onChangeDescription = (e) => {
        const description = e.target.value;
        this.setState((prevState) => ({
            description
        }))
    }

    onChangeDateFrom = (e) => {
        const dateFrom = e.target.value;
        this.setState((prevState) => ({
            dateFrom
        }))
    }

    onChangeDateTo = (e) => {
        const dateTo = e.target.value;
        this.setState((prevState) => ({
            dateTo
        }))
    }

    filterStolenBikes = (event)=> {
        event.preventDefault();
        this.props.filterStolenBikes(this.state);
    }


    getStateAndHelpers() {
        return {
            description: this.state.description,
            dateFrom: this.state.dateFrom,
            dateTo: this.state.dateTo,
            changeDescription: this.onChangeDescription,
            changeDateFrom: this.onChangeDateFrom,
            changeDateTo: this.onChangeDateTo,
            filterStolenBikes: this.filterStolenBikes
        }
    }

    render() {
        console.log(this.state)

        return this.props.children(this.getStateAndHelpers())
    }
}


export default connect(null, { filterStolenBikes })(BikeFilterContainer);