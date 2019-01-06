import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStolenBikes, selectBike, closeBikeDetail } from '../actions';

class StolenBikesContainer extends Component {

    initialState = {
        selectedPage: 1,
        pageCount: 1
    }

    state = this.initialState

    componentDidMount() {
        this.props.getStolenBikes({ pageNumber: this.state.selectedPage, filter: false });
    }

    selectBike = (bike) => {
        this.props.selectBike(bike);
    }

    onNextPage = () => {
        this.setState((prevState) => ({
            selectedPage: prevState.selectedPage + 1,
            pageCount: prevState.pageCount + 1,
        }), () => {
            this.props.getStolenBikes({ ...this.props.filterData, pageNumber: this.state.selectedPage, filter: false })
        })
    }

    onPreviousPage = () => {
        if (this.state.selectedPage !== 1) {
            this.setState((prevState) => ({
                selectedPage: prevState.selectedPage - 1
            }), () => {
                this.props.getStolenBikes({ ...this.props.filterData, pageNumber: this.state.selectedPage, filter: false })
            })
        }
    }

    selectPage = (i) => {
        this.setState((prevState) => ({
            selectedPage: i
        }), () => {
            this.props.getStolenBikes({ ...this.props.filterData, pageNumber: this.state.selectedPage, filter: false })
        })

    }


    getStateAndHelpers() {
        return {
            bikes: this.props.bikes,
            error: this.props.error,
            loading: this.props.loading,
            selectBike: this.selectBike,
            activeBike: this.props.activeBike,
            selectedPage: this.state.selectedPage,
            pageCount: this.state.pageCount,
            onPreviousPage: this.onPreviousPage,
            onNextPage: this.onNextPage,
            selectPage: this.selectPage
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.filterData !== prevProps.filterData && this.props.filterData.filter === true) {
            this.setState(this.initialState)
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        bikes: state.bike.items,
        error: state.bike.error,
        loading: state.bike.loading,
        activeBike: state.bike.activeBike,
        filterData: state.bike.filterData,
        filtered: state.bike.filtered

    }
}

export default connect(mapStateToProps, { getStolenBikes, selectBike, closeBikeDetail })(StolenBikesContainer);