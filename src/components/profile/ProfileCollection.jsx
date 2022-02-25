import * as React from 'react';
import classNames from "classnames";
import Button from "@mui/material/Button";
import styles from "./ProfileCollection.module.scss";
import Container from "@mui/material/Container";
import ProfileCollectionFilters from './ProfileCollectionFilters';
import profiles from "../../../data/profile.json";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
 import Card from "../card/Card";

export default function  ProfileCollection({user,filters,items=[]}){
  // console.log(user);
    return (
        <div className={classNames(styles["profile-collection"])}>
        <Container className={classNames(styles.container)} maxWidth="lg">
             <Grid container  direction="row" justifyContent="space-between"  spacing = {15} alignItems="center" className={classNames(styles["grid"])}>
                 <Grid item xs="3"  >
                 <Typography className={classNames(styles.name)} align='center' variant="h3" gutterBottom>Collection</Typography>
                 </Grid>
                <Grid  item xs = "7" >
                <ProfileCollectionFilters filters = {filters}></ProfileCollectionFilters>
                </Grid>
            </Grid> 
            <Grid container container spacing={3} className={classNames(styles["grid"])}>
            {items.map((c1) => (
                <Grid item xs="3" >
                <Card name={c1.name} mediaUrl={c1.source.url} user = {user} price = {c1.price} currency =  {c1.currency} likes={c1.likes}></Card>
                </Grid>
                 )
                )}
            </Grid> 
        </Container>
        </div>
    );
}