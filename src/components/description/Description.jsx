import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./Description.module.scss";
import  Typography  from '@mui/material/Typography';

export default function Description({text="",image=""}) {

    return (
      
      <div className={classNames(styles["description"])}>
          <Typography className={classNames(styles.text)} align='center' variant="body1" gutterBottom component="div">{text}</Typography>
          <img className={classNames(styles.image)} src={image}></img>
      </div>
      
    );
  }