import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./ProductInfoTitle.module.scss";
import  Typography  from '@mui/material/Typography';

export default function ProductInfoTitle({text=""}) {

    return (
      
      <div className={classNames(styles["product-info-title"])}>
          <Typography className={classNames(styles.title)} variant="h3" gutterBottom component="div"><h1>{text}</h1></Typography>
      </div>
      
    );
  }