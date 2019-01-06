

import React, { Component } from 'react';
import { Div, A, ActiveA, CenteredDiv } from './style';
import uniqueid from 'lodash.uniqueid';

class Pagination extends Component {

    getPages() {
        var pages = []
        for (let i = 0; i < this.props.pageCount; i++) {
            const MyA = i === this.props.selectedPage - 1 ? ActiveA : A;
            pages.push(<MyA key={uniqueid()} onClick={() => this.props.selectPage(i + 1)}>{i + 1}</MyA>)
        }
        return pages;
    }

    render() {
        return (
            <CenteredDiv>
                <Div>
                    <A key={uniqueid()} onClick={this.props.onPreviousPage} >&laquo;</A>
                    {this.getPages()}
                    <A key={uniqueid()}  >...</A>
                    <A key={uniqueid()} onClick={this.props.onNextPage} >&raquo;</A>
                </Div>
            </CenteredDiv>

        );
    }

}

export default Pagination;



