import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStolenBikes, selectBike, closeBikeDetail } from '../actions';

class StolenBikesContainer extends Component {

    state = {
        selectedPage:  1,
        pageCount: 1
    }
    componentDidMount() {
        this.props.getStolenBikes(this.state.selectedPage);
    }

    selectBike = (bike) => {
        this.props.selectBike(bike);
    }

    closeBikeDetail = () => {
        this.props.closeBikeDetail();
    }

    onNextPage = () => {
        this.setState((prevState) => ({
            selectedPage: prevState.selectedPage + 1,
            pageCount:  prevState.pageCount + 1 ,
        }), () => {
            this.props.getStolenBikes(this.state.selectedPage)
        })
    }

    onPreviousPage = () => {
        if (this.state.selectedPage !== 1) {
            this.setState((prevState) => ({
                selectedPage: prevState.selectedPage - 1
            }), () => {
                this.props.getStolenBikes(this.state.selectedPage)
            })
        }
    }

    selectPage = (i) => {
        this.setState((prevState) => ({
            selectedPage: i
        }), () => {
            this.props.getStolenBikes(this.state.selectedPage)
        })

    }


    getStateAndHelpers() {
        return {
            bikes: this.props.bikes,
            error: this.props.error,
            loading: this.props.loading,
            selectBike: this.selectBike,
            activeBike: this.props.activeBike,
            closeBikeDetail: this.closeBikeDetail,
            onChangePage: this.onChangePage,
            selectedPage: this.state.selectedPage,
            pageCount: this.state.pageCount,
            onPreviousPage: this.onPreviousPage,
            onNextPage: this.onNextPage,
            selectPage: this.selectPage
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
        activeBike: state.bike.activeBike

    }
}

export default connect(mapStateToProps, { getStolenBikes, selectBike, closeBikeDetail })(StolenBikesContainer);