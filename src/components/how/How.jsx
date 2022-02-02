import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Step from "../how/Step";
import styles from "./How.module.scss";

export default function How({description="",title="",items=[],link=""}) {
    const steps = [];
    for (let i=0;i<items.length;i++) {
        steps.push(<Grid item> <Step number = {i+1} title = {items[i].title}  description = {items[i].description} ></Step></Grid> );
      }
    return (
      
      <Container className={classNames(styles.container)} maxWidth="xl" >
       <Grid container  direction="row" justifyContent="center"   alignItems="center">
          <Grid item xs="5">
              <h1 className={classNames(styles.heading)} ><b>{title}</b></h1>
              <p >{description}</p>
            <Button size = "small"  variant="contained" color = "secondary" href = {link}>Learn More</Button>
          </Grid>
          <Grid  item container direction = "column" xs = "7" spacing = {3}  >
          {steps}
         </Grid>
          </Grid>
      </Container>
      
    );
  }