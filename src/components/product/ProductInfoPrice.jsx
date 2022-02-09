import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./ProductInfoPrice.module.scss";
import  Typography  from '@mui/material/Typography';

export default function ProductInfoPrice({amount=0,currency=""}) {

    return (
      
      <div className={classNames(styles["product-info-price"])}>
          <Typography className={classNames(styles.title)} variant="h3" gutterBottom component="div">{"ON SALE FOR "+amount+ " "+currency}</Typography>
      </div>
      
    );
  }