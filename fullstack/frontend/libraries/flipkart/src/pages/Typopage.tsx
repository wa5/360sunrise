import { Grid } from "@mui/material";
import React from "react";
import Typo from "../domain/typography/Typo";
import CustomButton from "../domain/typography/CustomButton";
export interface ITypopageProps {}

const Typopage: React.FC<ITypopageProps> = (props) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          {/* <Typo data="hello 1234" /> */}
        </Grid>
        <Grid item>
          <CustomButton />
        </Grid>
      </Grid>
    </>
  );
};

export default Typopage;
