import Container from "@mui/material/Container";
import Card from "../card/Card";
import classNames from "classnames";
import styles from "./Trending.module.scss";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';

//always 4 cards displayed
export default function Trending({cards = [],filters={sort: []}}){
  const [sortBy, setSort] = React.useState(1);
  
  const handleSortChange = (event)=>{
    setSort(event.target.value);
};
    return (
        <div className={classNames(styles.wrapper)}>
    <Container className={classNames(styles.container)} maxWidth="lg">
    <h1 className={classNames(styles.heading)}>Trending</h1>
    <Select className={classNames(styles.select)} label="Time"  variant='outlined' value={sortBy} onChange = {handleSortChange}>
    {filters.sort.map((element,index)=>(
                <MenuItem value={element.value} key={index}> {element.label} </MenuItem> 
                 ))
            }
    </Select> 
    <Grid className={classNames(styles.grid)}  container spacing={3}>
    {cards.map((c1) => (
         <Grid item lg>
         <Card name={c1.name} mediaUrl={c1.mediaUrl} user = {c1.owner} price = {c1.price} currency =  {c1.currency} likes={c1.likes}></Card>
         </Grid>
       )
       )}
      </Grid>
    </Container>
    </div>
);
}