import Container from "@mui/material/Container";
import Card from "../card/Card";
import classNames from "classnames";
import styles from "./TopCollectors.module.scss";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import CollectorColumn from "../collectors/CollectorColumn";
import * as React from 'react';
import _ from 'lodash';
import Box from "@mui/material/Box";

export default function TopCollectors({collectors = [], filters = {sort:[]}}){
    const [sortBy, setSort] = React.useState("desc");
  
    const handleSortChange = (event)=>{
        setSort(event.target.value);
    };
    const mapped = collectors.map(({id,name,nftsCount,avatar,verified},ind) => {
        let index = ind+1;
        return {id,name,nftsCount,avatar,verified,index}});
   
    const chunks = _.chunk(mapped,3);
    
    return (

    <Container className={classNames(styles.container)} maxWidth="lg">
        <h1 className={classNames(styles.heading)}>Top Collectors</h1>
        <Select className={classNames(styles.select)}  variant='outlined' value={sortBy} onChange = {handleSortChange}>
             {filters.sort.map((element,index)=>(
                <MenuItem value={element.value} key={index}> {element.label} </MenuItem> 
                 ))
            }
    </Select>
        <Grid className={classNames(styles.grid)} spacing={5}  container direction="row" justifyContent="center"  >
        
        {chunks.map((itemsForCollector) => (
         <Grid item xs="3"> 
         <CollectorColumn items={itemsForCollector}></CollectorColumn>
         </Grid>
       )
       )}
        </Grid>
    </Container>
);
}