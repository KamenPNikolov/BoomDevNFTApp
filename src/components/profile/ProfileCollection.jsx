import * as React from 'react';
import classNames from "classnames";
import Button from "@mui/material/Button";
import styles from "./Featured.module.scss";
import Container from "@mui/material/Container";
import ProfileCollectionFilters from './ProfileCollectionFilters';
import profiles from "../../../data/profile.json";


export default function  ProfileCollection({user,filter,items}){

    return (
        <div className={classNames(styles["profile-collection"])}>
        <Container className={classNames(styles.container)} maxWidth="lg">
             <Grid container  direction="row" justifyContent="space-between"  alignItems="center" className={classNames(styles["grid"])}>
                 <Grid item xs="3"  >
                 <Typography className={classNames(styles.name)} align='center' variant="h3" gutterBottom component="div">Collection</Typography>
                 </Grid>
                <Grid  item xs = "9" >
                <ProfileCollectionFilters filters = {filter}></ProfileCollectionFilters>
                </Grid>
            </Grid> 
            <Grid container container spacing={3} className={classNames(styles["grid"])}>
            {items.map((c1) => (
                <Grid item xs="3" lg>
                <Card name={c1.name} mediaUrl={c1.mediaUrl} user = {c1.user} price = {c1.price} currency =  {c1.currency} likes={c1.likes}></Card>
                </Grid>
                 )
                )}
            </Grid> 
        </Container>
        </div>
    );
}