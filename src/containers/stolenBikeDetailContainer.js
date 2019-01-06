import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGeocodeOfStolenBike, closeBikeDetail } from '../actions';

class StolenBikeDetailContainer extends Component {


    closeBikeDetail = () => {
        this.props.closeBikeDetail();
    }


    componentDidUpdate(prevProps) {
        if (this.props.activeBike !== prevProps.activeBike && this.props.activeBike) {
            this.props.getGeocodeOfStolenBike(this.props.activeBike);
        }
    }

    getStateAndHelpers() {
        console.log(this.props.activeBike)
        return {
            activeBike: this.props.activeBike,
            closeBikeDetail: this.closeBikeDetail,
            address: this.props.address,
            error: this.props.error,
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        error: state.bike.error,
        activeBike: state.bike.activeBike,
        address: state.bike.address

    }
}

export default connect(mapStateToProps, { closeBikeDetail, getGeocodeOfStolenBike })(StolenBikeDetailContainer);