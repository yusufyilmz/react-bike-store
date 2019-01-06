
import styled from 'styled-components';


export const InputWrapper = styled.input`
    width: ${props => props.width ? props.width+  'px' : '150px'};
    margin-right:20px;
    cursor:pointer;
    border-radius: 5px;
    height:30px;
    font-size: 15px!important;
    margin-top: 20px;
    float: ${props => props.float && props.float}
`;

