import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./Step.module.scss"
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";


export default function Step({number = 0,title = "", description = ""}) {

  return (
    
    <Container className={classNames(styles.container)} maxWidth="sm">
     <Grid container  direction="row" justifyContent="center"   alignItems="stretch" >
        <Grid item xs="4" className={classNames(styles.lightGrid)}>
            <b className={classNames(styles.number)} >{number}</b>
        </Grid>
        <Grid  item xs = "8"   className={classNames(styles.darkGrid)}>
       <div >
        <b className={classNames(styles.title)}>{title}</b>
        <p className={classNames(styles.description)}>{description}</p>
        </div>
        </Grid>
        </Grid>
    </Container>
    
  );
}