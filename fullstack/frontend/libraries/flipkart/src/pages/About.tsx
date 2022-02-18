import { Rating, Stack } from '@mui/material';
import React from 'react';
import { CarouselContainer1 } from '../domain/corousel/container/CarouselContainer1';
import UserH1Containr from '../domain/Headers/component/UserH1Containr';
import SagaTest from '../domain/reducerTest/containers/SagaTest';

interface IAboutProps{}
const  About:React.FC<IAboutProps>=()=>{

    return (
        <>
        <CarouselContainer1/>
        <UserH1Containr name={''}/>
         <h1>im about page</h1>
        <SagaTest/>

        <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
        </>
       
    )
}
export default About


