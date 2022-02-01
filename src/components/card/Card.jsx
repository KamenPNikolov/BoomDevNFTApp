import * as React from 'react';
import classNames from "classnames";
import Button from "@mui/material/Button";
import styles from "./Card.module.scss";
import TextField from "@mui/material/TextField";
import Avatar from '../avatar/Avatar';
import * as myModule from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import millify from "millify";
import Chip from '@mui/material/Chip';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Card({title="",likes = 0, mediaUrl = "", user = {avatar: {url : ""},verified: false}, price = "", currency = ""}){

    return (
    
    <myModule.Card sx={{ maxWidth: 500 }} className={classNames(styles.card)}>
      <CardHeader
        avatar={
          <Avatar verified = {user.verified} url = {user.avatar.url}></Avatar>
        }
      />
      <CardMedia className={classNames(styles.media)}
        component="img"
        image={mediaUrl}
        alt="NFT Media"
      />
     <CardContent>
       <div className={classNames(styles.title)}>{title}</div> 
        <b className={classNames(styles.price)}>{"~"+ price+" "+currency}</b>
        <Chip color = "secondary" className={classNames(styles.likes)} variant="outlined" icon = {<FavoriteIcon></FavoriteIcon>} label = {millify(likes)}></Chip>
      </CardContent>
      <CardActions></CardActions>
     </myModule.Card>
    

    );
}