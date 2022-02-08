import Container from "@mui/material/Container";
import Card from "../card/Card";
import classNames from "classnames";
import styles from "./TopCollectors.module.scss";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import CollectorColumn from "../collectors/CollectorColumn";
import _ from 'lodash';

export default function TopCollectors({collectors = []}){
    const mapped = collectors.map(({name,nftsCount,avatar,verified},index) => {
        let id = index+1;
        return {name,nftsCount,avatar,verified,id}});
    console.log(mapped);
    console.log("*****");
    const chunks = _.chunk(mapped,3);
    console.log(chunks);
    return (

    <Container className={classNames(styles.container)} maxWidth="xl">
        <h1 className={classNames(styles.heading)}>Top Collectors</h1>
        <Select className={classNames(styles.select)} defaultValue = {7}  label="Time" >
            <MenuItem value={0}>Today </MenuItem>
            <MenuItem value={7}>This Week</MenuItem>
            <MenuItem value={30}>This Month</MenuItem>
        </Select> 
        <Grid className={classNames(styles.grid)}  container direction="row" justifyContent="center"  >
        {chunks.map((itemsForCollector) => (
         <Grid item xs="2.8">   
         <CollectorColumn items={itemsForCollector}></CollectorColumn>
         </Grid>
       )
       )}
        </Grid>
    </Container>
);
}