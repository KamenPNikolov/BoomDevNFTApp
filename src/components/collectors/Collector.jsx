import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./Collector.module.scss"
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import User from "../user/User";




export default function Collector({name = "",avatar = "", verified = false,type = 0, nftCount = 0,id = 0}) {
    const darkOrLight = (type==0?styles.dark:styles.light);
    const darkOrLightNumber = (type==0?styles.darknumber:styles.lightnumber);
  return (
    <div className={classNames(styles.container,darkOrLight )} >
        <Grid container  direction="row" justifyContent="space-between"  alignItems="stretch">
        <Grid item xs="3" className={classNames(darkOrLightNumber )} >
            <b className={classNames(styles.number)} >{id}</b>
        </Grid>
        <Grid  item xs = "8" >
        <User  className={classNames(styles.user)} verified = {verified}  avatar = {avatar} name = {name} info={nftCount + " items"} ></User>
        </Grid>
        </Grid>    
    </div>
    
  );
}