import styled from '@emotion/styled';
import React from 'react';
import { AnotherButton, CButton } from './styles/Typo.styles';

export interface ICustomButtonProps{};
let Customh1=styled.h1`
background-color:red;
color:yellow;
`




const  CustomButton:React.FC<ICustomButtonProps>=(props)=>{
    return (<>
    <Customh1>1234</Customh1>
    <CButton >click me</CButton>
    <AnotherButton>im copy</AnotherButton>
    </>);
};

export default CustomButton;

