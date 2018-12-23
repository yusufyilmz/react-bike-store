import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getStolenBikes} from '../actions';

class StolenBikesContainer extends Component {

    componentDidMount() {
        this.props.getStolenBikes();
    }
        
    getStateAndHelpers() {
        return {
            bikes: this.props.bikes,
            error: this.props.error,
            loading: this.props.loading
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

    }
}

export default connect(mapStateToProps, {getStolenBikes})(StolenBikesContainer);