import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./ProductContainer.module.scss";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Chip } from '@mui/material';
import * as myModule from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import User from '../user/User';
import  Typography  from '@mui/material/Typography';
import Button from "@mui/material/Button";
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import ProductActions from './ProductActions';
import ProductTabs from './ProductTabs';
import { format, formatDistance, formatRelative, subDays, parseISO } from 'date-fns'

export default function ProductContainer({name = "", owner = {username:"",verified,avatar:{url:""}}, price = 0, currency = "", likes = 0, auction_end = ((Date.now()+1000).toString), details = "", source = {url:""}, bids = [] }){
    return (
        <div className={classNames(styles["product-container"])} >
        <Grid container  direction="row" justifyContent="space-evenly"  alignItems="stretch" spacing={2}>
        <Grid item xs="6"  >
        <ProductImage url={source.url}></ProductImage>
        </Grid>
       <Grid  item xs = "5" >
       <ProductInfo onTimeEnd={()=>{}} title= {name} creator = {{name: owner.username, verified: owner.verified, avatar: owner.avatar.url}} price={price} currency = {currency} likes={likes} timeEnd={parseISO(auction_end)} isLive={parseISO(auction_end)>Date.now()} ></ProductInfo>
       <ProductTabs text={details} bids={bids}></ProductTabs>
       <ProductActions onBid={()=>{}} onBuy={()=>{}} isLive={true}  currency={currency} buyAmount={price} bidAmount={5}></ProductActions>
       </Grid>
       </Grid>
       </div>
    );
}