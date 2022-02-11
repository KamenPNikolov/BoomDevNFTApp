import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./ProductInfo.module.scss";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Chip } from '@mui/material';
import * as myModule from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import User from '../user/User';
import  Typography  from '@mui/material/Typography';

export default function ProductInfo({title="",creator={name: "",avatar: "", verified: false},price = 0, curency = "", likes = 0, onTimeEnd, timeEnd = Date.now(), isLive =false }) {

    return (
      <div className={classNames(styles["product-info"])}>
        
    </div>
      
    );
  }
