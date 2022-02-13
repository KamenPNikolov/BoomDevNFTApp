import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./ProductActions.module.scss";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Chip } from '@mui/material';
import * as myModule from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import User from '../user/User';
import  Typography  from '@mui/material/Typography';
import Button from "@mui/material/Button";


export default function ProductActions({isLive = false, currency = "", buyAmount = 0, bidAmount = 0,onBuy,onBid}){
    return (
    <div className={classNames(styles["product-actions"])} >
    <Grid container  direction="row" justifyContent="space-between"  alignItems="stretch" spacing={1}>
    <Grid item xs="7"  >
    <Button className={classNames(styles["button"])} onClick = {onBuy} disabled={!isLive?true:false} variant="contained" >{"BUY FOR " + buyAmount+ " "+ currency}</Button>
    </Grid>
   <Grid  item xs = "5" >
   <Button className={classNames(styles["button"])} onClick={onBid} disabled={!isLive?true:false} variant='outlined' color='success' >{"PLACE BID FOR "+ bidAmount+ " "+currency}</Button>
   </Grid>
   </Grid>
   </div>
   );
}

