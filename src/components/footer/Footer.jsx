import * as React from 'react';
import classNames from "classnames";
import Logo from '../logo/Logo';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import styles from "./Footer.module.scss"
import Grid from "@mui/material/Grid";



export default function Footer() {

    return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)}  maxWidth = 'xl'>
      <Grid container  direction="row" justifyContent="space-evenly" alignItems="center">
        <Grid item xs="2">
        <Logo type = "muted"></Logo>
        </Grid>
        <Grid item xs = "5" >
        <p style ={{marginLeft:"30%"}}>BUM All rights reserved</p>
        </Grid>
        <Grid item xs = "4">
        <Button className={classNames(styles.button)} size = "small" variant="text">Privacy Policy</Button>
        <Button   className={classNames(styles.button)} variant="text" size = "small">Cookie Policy</Button>
        </Grid>
      </Grid>
      </Container>
    </div>      
    );
  }