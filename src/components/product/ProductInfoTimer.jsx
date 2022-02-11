import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./ProductInfoTimer.module.scss";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Chip } from '@mui/material';
import * as myModule from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import User from '../user/User';
import Countdown from 'react-countdown';
import  Typography  from '@mui/material/Typography';

export default function ProductInfoTimer({onTimeEnd,timeEnd}) {
    const countDownPaper = timeEnd? 
    <Countdown 
    date={timeEnd}
    onComplete={onTimeEnd}
    renderer={(props) => (<div className={classNames(styles.count)} >{props.formatted.hours +":" +props.formatted.minutes +":" +props.formatted.seconds}</div>)}
    />:"";
    return (
      <div className={classNames(styles["product-info-timer"])}>
        { timeEnd? 
        <myModule.Card className={classNames(styles["product-info-timer-card"])}>
         <Typography className={classNames(styles.title)}  component="div">Ends in</Typography>
       
        <div className={classNames([styles["timer"],styles["active"]])}>{countDownPaper}</div>
        </myModule.Card>:""}
        </div>
      
    );
  }