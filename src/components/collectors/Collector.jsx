import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./Collector.module.scss"
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import User from "../user/User";
import { useRouter } from 'next/router';




export default function Collector({name = "",avatar, verified = false,type = 0, nftsCount = 0,id,index=0}) {
    const darkOrLight = (type==0?styles.dark:styles.light);
    const darkOrLightNumber = (type==0?styles.darknumber:styles.lightnumber);
    const router = useRouter();
  return (
    <div className={classNames(styles.container,darkOrLight )} onClick={() =>  router.push("/profile/"+id)}>
        <Grid container  direction="row" justifyContent="flex-start"  alignItems="stretch">
        <Grid item xs="3" className={classNames(darkOrLightNumber )} >
            <b className={classNames(styles.number)} >{index}</b>
        </Grid>
        <Grid  item xs = "8" >
        <User  className={classNames(styles.user)} verified = {verified} size={50} avatar = {avatar.url} name = {name} info={nftsCount} ></User>
        </Grid>
        </Grid>    
    </div>
    
  );
}