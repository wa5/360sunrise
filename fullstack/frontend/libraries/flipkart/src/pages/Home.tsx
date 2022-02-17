import { Button, ButtonGroup, Container, Grid } from "@mui/material";
import { CardContainer } from "../domain/cards";
import { CarouselContainer1 } from "../domain/corousel/container/CarouselContainer1";
import { NavbarContiner } from "../domain/navbars/container/NavbarContiner";
import img from "../img/2.jpg";
import Image from "react-bootstrap/Image";
function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <NavbarContiner />
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Image roundedCircle height="100px" src={img} />
          </Grid>
          <Grid item>
            <Image roundedCircle height="100px" src={img} />
          </Grid>
          <Grid item>
            <Image roundedCircle height="100px" src={img} />
          </Grid>
          <Grid item>
            <Image roundedCircle height="100px" src={img} />
          </Grid>
          <Grid item>
            <Image roundedCircle height="100px" src={img} />
          </Grid>
          <Grid item>
            <Image roundedCircle height="100px" src={img} />
          </Grid>
          <Grid item>
            <Image roundedCircle height="100px" src={img} />
          </Grid>
        </Grid>
<br/>
        <Grid>
          <CarouselContainer1 />
        </Grid>
        <br/>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={3}
        >
          <CardContainer />
          <CardContainer />
          <CardContainer />
          <CardContainer />
        </Grid>
        <br/>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={3}
        >
          <CardContainer />
          <CardContainer />
          <CardContainer />
          <CardContainer />
        </Grid>
        <br/>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={3}
        >
          <CardContainer />
          <CardContainer />
          <CardContainer />
          <CardContainer />
        </Grid>
      </Container>
    </>
  );
}
// interface H1{
//     data:string
//     num?:number
// }

// const H1=(props:H1)=>{return (<h1>{props.data}</h1>)}

// interface H2{

// }
// const h2:React.FC<H1>=()=>{return (<h2></h2>)}
export default Home;
