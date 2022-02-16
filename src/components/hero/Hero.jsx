import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./Hero.module.scss";
import  Typography  from '@mui/material/Typography';

export default function Hero({text=""}) {

    return (
      
      <div className={classNames(styles["hero"])}>
          <Typography className={classNames(styles.text)} align='center' variant="h1" gutterBottom component="div"><h1>{text}</h1></Typography>
      </div>
      
    );
  }