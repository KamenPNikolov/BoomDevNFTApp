import * as React from 'react';
import classNames from "classnames";
import Button from "@mui/material/Button";
import styles from "./Avatar.module.scss"
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Badge from '@mui/material/Badge';


export default function Avatar({size = 90, url = "",verified = false}) {

    return (
    <div className={classNames(styles.avatar)} style = {{width: size*1.1, height: size*1.1,  display: "flex"}}>
      <img src= {url} className={classNames(styles.image)} style = {{flex:1 , width: undefined, height: undefined}}></img>
      <img className={classNames(styles.badge)} src={"/images/verified.svg"}  style={{visibility:verified?"visible":"hidden"}}></img>
     
    </div>      
    );
  }