import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./ProductInfoCreator.module.scss";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Chip } from '@mui/material';
import * as myModule from "@mui/material";
import CardHeader from '@mui/material/CardHeader';

export default function ProductInfoCreator({name="",avatar="",verified=false}) {

    return (
      
        <myModule.Card sx={{ maxWidth: 100 }} className={classNames(styles.card)}>
           <CardHeader  title = "Creator"/> 
           <CardContent></CardContent>
        </myModule.Card>
      
    );
  }



