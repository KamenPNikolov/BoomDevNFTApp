import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./ProductInfoLikes.module.scss";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Chip } from '@mui/material';


export default function ProductInfoStatus({amount=0}) {

    return (
      
      <div className={classNames(styles["product-info-likes"])}>
         <Chip color = "secondary" className={classNames(styles.likes)} variant="outlined" icon = {<FavoriteIcon></FavoriteIcon>} label = {millify(amount)}></Chip>
      </div>
      
    );
  }