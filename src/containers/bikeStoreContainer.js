import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getStolenBikes} from '../actions';

class BikeStoreContainer extends Component {

    componentDidMount() {
        this.props.getStolenBikes();
    }
    getStateAndHelpers() {
        return {
            bikes: this.props.bikes
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        bikes: state.bike.items,

    }
}

export default connect(mapStateToProps, {getStolenBikes})(BikeStoreContainer);