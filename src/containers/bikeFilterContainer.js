import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterStolenBikes } from '../actions';

class BikeFilterContainer extends Component {
    state = {
        title: '',
        dateFrom: '',
        dateTo: '',
    }

    onChangeTitle = (e) => {
        const title = e.target.value;
        this.setState((prevState) => ({
            title
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
            title: this.state.title,
            dateFrom: this.state.dateFrom,
            dateTo: this.state.dateTo,
            changeTitle: this.onChangeTitle,
            changeDateFrom: this.onChangeDateFrom,
            changeDateTo: this.onChangeDateTo,
            filterStolenBikes: this.filterStolenBikes,
            activeBike: this.props.activeBike
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        activeBike: state.bike.activeBike

    }
}


export default connect(mapStateToProps, { filterStolenBikes })(BikeFilterContainer);