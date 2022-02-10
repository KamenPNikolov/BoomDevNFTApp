import * as React from 'react';
import classNames from "classnames";
import Button from "@mui/material/Button";
import styles from "./User.module.scss";
import TextField from "@mui/material/TextField";
import Avatar from '../avatar/Avatar';


export default function User({name = "", info = "",avatar = "",size = 55, verified = false}) {

    return (
    <div className={classNames(styles.user)}  style = {{width: size*3}} >  
       <Avatar className={classNames(styles.avatar)} verified = {verified} size = {size} url = {avatar}></Avatar>
       <div className={classNames(styles.innerGrid)}>
        <div className={classNames(styles.name)}>{name}</div>
        <div className={classNames(styles.info)}>{info + (info?" items":"")}</div>
        </div>
    </div>      
    );
  }