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
    <Container className={classNames(styles.container)} maxWidth="lg">
    <h1 className={classNames(styles.heading)}>Trending</h1>
    <Select className={classNames(styles.select)} defaultValue = {7}  label="Time" >
    <MenuItem value={0}>Today </MenuItem>
    <MenuItem value={7}>This Week</MenuItem>
    <MenuItem value={30}>This Month</MenuItem>
    </Select> 
    <Grid className={classNames(styles.grid)}  container spacing={3}>
    {cards.map((c1) => (
         <Grid item lg>
         <Card name={c1.name} mediaUrl={c1.mediaUrl} user = {c1.user} price = {c1.price} currency =  {c1.currency} likes={c1.likes}></Card>
         </Grid>
       )
       )}
      </Grid>
    </Container>
    </div>
);
}