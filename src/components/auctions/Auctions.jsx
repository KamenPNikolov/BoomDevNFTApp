import Container from "@mui/material/Container";
import Card from "../card/Card";
import classNames from "classnames";
import styles from "./Auctions.module.scss";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import * as React from 'react';
import { format, formatDistance, formatRelative, subDays, parseISO } from 'date-fns';

//always 4 cards displayed
export default function Auctions({cards = [],filters={price: []}}){
    const [sortBy, setSort] = React.useState(1);
  
    const handleSortChange = (event)=>{
        setSort(event.target.value);
    };

    return (
        <div className={classNames(styles.wrapper)}>
    <Container className={classNames(styles.container)} maxWidth="lg">
    <h1 className={classNames(styles.heading)}><LocalFireDepartmentIcon></LocalFireDepartmentIcon> Live Auctions</h1>
    <Select className={classNames(styles.select)} label="Time"  variant='outlined' value={sortBy} onChange = {handleSortChange}>
    {filters.price.map((element)=>(
                <MenuItem value={element.value} > {element.label} </MenuItem> 
                 ))
            }
    </Select> 
    <Grid className={classNames(styles.grid)}  container spacing={3}>
        {cards.map((c1) => (
         <Grid item lg>
         <Card name={c1.name} mediaUrl={c1.mediaUrl} user = {c1.owner} price = {c1.price} currency =  {c1.currency} likes={c1.likes} timeLeft = {parseISO(c1.auction_end)-Date.now()}></Card>
         </Grid>
       )
       )}
    </Grid>   
    </Container>
    </div>
);
}