import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./ProductInfoCreator.module.scss";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Chip } from '@mui/material';
import * as myModule from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import User from '../user/User';
import  Typography  from '@mui/material/Typography';


export default function ProductInfoCreator({name="",avatar="",verified=false}) {

    return (
      
        <myModule.Card className={classNames(styles["product-info-creator"])}>
         <Typography className={classNames(styles.title)}  component="div"><b className={classNames(styles.text)} >Creator</b></Typography>
       
        <div className={classNames(styles["user-container"])}><User name={name} avatar={avatar} verified = {verified}></User></div>
        </myModule.Card>
      
    );
  }



