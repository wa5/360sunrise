
import { Button, ButtonGroup, Grid } from "@mui/material"


function Home(){
   
    return (
        <>
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{backgroundColor:"yellow"}}>
     <Grid item xs={12} style={{backgroundColor:"red"}}>
    <h1 >navbr</h1>
  </Grid>
  <br/>
  <Grid item xs={12} style={{backgroundColor:"red"}}>

    <h1 >image</h1>
  </Grid>
  <br/>
  <Grid item xs={12} style={{backgroundColor:"red"}}>
    <h1 >slider</h1>
  </Grid>
  <br/>
  <Grid item xs={6} style={{backgroundColor:"red"}}>

    <h1 >cards</h1>
  </Grid>
     </Grid>
        </>
       
        
    )
 }
// interface H1{
//     data:string
//     num?:number
// }

// const H1=(props:H1)=>{return (<h1>{props.data}</h1>)}

// interface H2{
   
// }
// const h2:React.FC<H1>=()=>{return (<h2></h2>)}
export default Home