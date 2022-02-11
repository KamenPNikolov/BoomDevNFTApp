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
import Stack from "@mui/material/Stack";
import ProductInfoPrice from './ProductInfoPrice';
import ProductInfoTitle from './ProductInfoTitle';
import ProductInfoStatus from './ProductInfoStatus';
import ProductInfoLikes from './ProductInfoLikes';
import ProductInfoCreator from './ProductInfoCreator';
import ProductInfoTimer from './ProductInfoTimer';
import  Container  from '@mui/material/Container';


export default function ProductInfo({title="",creator={name: "",avatar: "", verified: false},price = 0, currency = "", likes = 0, onTimeEnd, timeEnd = Date.now(), isLive =false }) {

    return (
      <div className={classNames(styles["product-info"])}  maxWidth="sm">
        <ProductInfoTitle   text={title} className={classNames(styles["title"])}></ProductInfoTitle>
        <Stack className={classNames(styles["stats"])}
                
                direction="row"
                justifyContent="space-between"
                alignItems="stretch"
                spacing={2}
            >
                
               <ProductInfoPrice amount={price} currency={currency} ></ProductInfoPrice>
               
              <Stack direction="row"> {isLive?<ProductInfoStatus></ProductInfoStatus>:""}
                <ProductInfoLikes amount={likes}></ProductInfoLikes> 
              </Stack>
                
            </Stack>

            <Grid container  direction="row" justifyContent="space-between"  alignItems="stretch" className={classNames(styles["grid"])}>
                 <Grid item xs="7"  >
                 <ProductInfoCreator name={creator.name} avatar={creator.avatar} verified={creator.verified}></ProductInfoCreator>
                 </Grid>
                <Grid  item xs = "5" >
                <ProductInfoTimer onTimeEnd={onTimeEnd} timeEnd={timeEnd}></ProductInfoTimer>
                </Grid>
        </Grid> 
    </div>
      
    );
  }
