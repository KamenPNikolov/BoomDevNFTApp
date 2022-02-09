import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./ProductImage.module.scss"


export default function ProductImage({url=""}) {

    return (
      
      <div className={classNames(styles["product-image"])}>
          <img className={classNames(styles.image)} src={url}></img>
      </div>
      
    );
  }