import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./Collector.module.scss"
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import User from "../user/User";


export default function Collector({name = "",avatar = "", verified = false,type = 0, nftCount = 0}) {
    const darkOrLight = (type==0?styles.dark:styles.light);
  return (
    <div className={classNames(styles.container,darkOrLight )} >
        <User   verified = {verified}  avatar = {avatar} name = {name} info={nftCount + " items"} ></User>
    </div>
    
  );
}