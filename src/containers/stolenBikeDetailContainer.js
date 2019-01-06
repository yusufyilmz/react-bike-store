import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGeocodeOfStolenBike, closeBikeDetail } from '../actions';

class StolenBikeDetailContainer extends Component {

    componentDidMount() {
        // this.props.getStolenBikes(this.state.selectedPage);
    }

    closeBikeDetail = () => {
        this.props.closeBikeDetail();
    }


    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.activeBike !== prevProps.activeBike && this.props.activeBike) {
            this.props.getGeocodeOfStolenBike(this.props.activeBike);
        }
    }

    getStateAndHelpers() {
        console.log(this.props.activeBike)
        return {
            activeBike: this.props.activeBike,
            closeBikeDetail: this.closeBikeDetail,
            address: this.props.address
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        error: state.bike.error,
        loading: state.bike.loading,
        activeBike: state.bike.activeBike,
        address: state.bike.address

    }
}

export default connect(mapStateToProps, { closeBikeDetail, getGeocodeOfStolenBike })(StolenBikeDetailContainer);