

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




// import React, { Component } from 'react';
// import { Div, A, ActiveA } from './style';
// import uniqueid from 'lodash.uniqueid';

// class Pagination extends Component {

//     state = {
//         // pageCount: 1,
//         selectedPage: this.props.selectedPage
//     }

//     onNextPage = () => {

//         this.setState((prevState) => ({
//             selectedPage: prevState.selectedPage + 1
//         }), () => {
//             this.props.onChangePage(this.state.selectedPage)
//         })
//     }

//     onPreviousPage = () => {
//         if (this.state.selectedPage !== 0) {
//             this.setState((prevState) => ({
//                 selectedPage: prevState.selectedPage - 1
//             }), () => {
//                 this.props.onChangePage(this.state.selectedPage)
//             })
//         }
//     }

//     selectPage = (i) => {
//         this.setState((prevState) => ({
//             selectedPage: i
//         }), () => {
//             this.props.onChangePage(this.state.selectedPage)
//         })

//     }
//     getPages() {
//         var pages = []
//         for (let i = 0; i < this.props.pageCount; i++) {
//             const MyA = i === this.state.selectedPage-1 ? ActiveA : A;
//             pages.push(<MyA key={uniqueid()}  onClick={() => this.selectPage(i+1)} active={true} >{i + 1}</MyA>)
//         }
//         return pages;
//     }


//     render() {
//         return (
//             <Div>
//                 <A key={uniqueid()} onClick={this.onPreviousPage} >&laquo;</A>
//                 {this.getPages()}
//                 <A key={uniqueid()}  >...</A>
//                 <A key={uniqueid()} onClick={this.onNextPage} >&raquo;</A>
//             </Div>
//         );
//     }

// }

// export default Pagination;
