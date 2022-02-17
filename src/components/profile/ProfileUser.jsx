import * as React from 'react';
import classNames from "classnames";
import Avatar from '../avatar/Avatar';
import  Typography  from '@mui/material/Typography';
import styles from "./ProfileUser.module.scss";
import Stack from "@mui/material/Stack";

export default function ProfileUser({name="", info="", avatar = "", verified = false}){

    return (
                <div className={classNames(styles["profile-user"])}>
                    <div className={classNames(styles.avDiv)}>
                    <Avatar url={avatar} verified = {verified} size={150} className={classNames(styles.avatar)}></Avatar>
                    </div>
                    <Typography className={classNames(styles.name)} align='center' variant="h3" gutterBottom component="div">{name}</Typography>
                    <Typography className={classNames(styles.info)} align='center' variant="body1" color="text.secondary" gutterBottom component="div">{info}</Typography>
                    
                </div>

    );
}