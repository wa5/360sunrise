import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { ITypoProps } from "./interface/ITypo";

const Mystyle = styled.h1`
  background-color: red;
`;
const MyH2 = styled.h2`
  background-color: blue;
  color: green;
  font-size: 40px;
`;
interface ButtonProps{
    primary?:boolean
}
const Mybutton = styled.button<ButtonProps>`
  background-color: blue;
  color: ${props=>props.primary?"white":"red"};
  font-size: 40px;
`;

const Typo: React.FC<ITypoProps> = (props) => {
  return (
    <>
      <Grid container>
        <Grid item>
          <Mystyle>DATA</Mystyle>
          <Mystyle>DATA</Mystyle>
          <Mybutton primary >click me</Mybutton>
          <MyH2>im h 2 element</MyH2>
          <h1>{props.data}</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default Typo;

// const mystyle={
//     backgroundColor:"red"
// }
//npm i --save-dev @types/styled-components
