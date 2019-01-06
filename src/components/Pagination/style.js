

import styled from 'styled-components';


export const CenteredDiv = styled.div`
    text-align: center;
`


export const Div = styled.div`
    display: inline-block;
    text-align: center;
`

export const A = styled.a`
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
`
A.displayName = 'a';

export const ActiveA = styled(A)`
    background-color: #1abc9c;
    color: white;
    border: 1px solid #4CAF50;
`;