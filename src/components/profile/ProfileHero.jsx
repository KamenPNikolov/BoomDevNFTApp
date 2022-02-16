import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./ProfileHero.module.scss";
import  Typography  from '@mui/material/Typography';

export default function ProfileHero({image=""}) {

    return (
      
      <div className={classNames(styles["profile-hero"])}>        
          <img className={classNames(styles.image)} src={image}></img>
      </div>
      
    );
  }