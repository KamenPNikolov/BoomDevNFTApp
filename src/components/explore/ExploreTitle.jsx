import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./ExploreTitle.module.scss";
import  Typography  from '@mui/material/Typography';

export default function ExploreTitle({text=""}) {

    return (
      
      <div className={classNames(styles["explore-title"])}>
          <Typography className={classNames(styles.title)} align='center' variant="h1"  component="div">{text}</Typography>
      </div>
      
    );
  }