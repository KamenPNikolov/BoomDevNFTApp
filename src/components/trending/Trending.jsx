import Container from "@mui/material/Container";
import Card from "../card/Card";
import classNames from "classnames";
import styles from "./Trending.module.scss";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';

//always 4 cards displayed
export default function Trending({cards = []}){
    const [c1,c2,c3,c4] = cards;

    return (
        <div className={classNames(styles.wrapper)}>
    <Container className={classNames(styles.container)} maxWidth="xl">
    <h1 className={classNames(styles.heading)}>Trending</h1>
    <Select className={classNames(styles.select)} defaultValue = {7}  label="Time" >
    <MenuItem value={0}>Today </MenuItem>
    <MenuItem value={7}>This Week</MenuItem>
    <MenuItem value={30}>This Month</MenuItem>
    </Select> 
    <Grid className={classNames(styles.grid)}  container spacing={3}>
        <Grid item lg>
        <Card name ={c1.name} mediaUrl={c1.mediaUrl} user = {c1.user} price = {c1.price} currency =  {c1.currency} likes={c1.likes} ></Card>
        </Grid>
        <Grid item lg>
        <Card name={c2.name} mediaUrl={c2.mediaUrl} user = {c2.user} price = {c2.price} currency =  {c2.currency} likes={c2.likes} ></Card>
        </Grid>
        <Grid item lg>
        <Card name={c3.name} mediaUrl={c3.mediaUrl} user = {c3.user} price = {c3.price} currency =  {c3.currency} likes={c3.likes} ></Card>
        </Grid>
        <Grid item lg>
        <Card name={c4.name} mediaUrl={c4.mediaUrl} user = {c4.user} price = {c4.price} currency =  {c4.currency} likes={c4.likes} ></Card>
        </Grid>
      </Grid>
    </Container>
    </div>
);
}