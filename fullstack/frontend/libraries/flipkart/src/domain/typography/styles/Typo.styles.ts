import styled from "styled-components";
import { IMyProps } from "../interface/ITypo";


const Tile=styled.h1`
color:red
`
export let CButton=styled.button<IMyProps>`
background-color: ${(props)=>{return props.primary?'yellow':'orange'}};
color: white;
font-size: 40px;
`
export let AnotherButton=styled(CButton)`
font-wight:600;
`