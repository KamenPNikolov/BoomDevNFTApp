import * as React from 'react';
import classNames from "classnames";
import styles from "./ExploreFilters.module.scss";
import Search from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import TextField from "@mui/material/TextField";
import  InputLabel  from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import FormControl from "@mui/material/FormControl";

export default function ExploreFilters({filters={sort: [], price:[]}}) {
    const [sortBy, setSort] = React.useState();
    const [prices, setPrice] = React.useState();
    //console.log(filters.sort);
   // console.log(filters.price);
   const handleSortChange = (event)=>{
        setSort(event.target.value);
    };
    const handlePriceChange = (event)=>{
        setPrice(event.target.value);
    };
    return (
      
      <div className={classNames(styles["explore-filters"])}>
        <Stack direction = "row" spacing = {2} alignItems="center">
        <FormControl variant="filled"  margin="dense"  size="small"  sx={{minWidth: 150 }} >
        <InputLabel   id="sort-select-standard-label">Sort by</InputLabel>
          <Select   className={classNames(styles.select)} variant='outlined' value={sortBy} onChange = {handleSortChange} labelId="sort-select-standard-label" >
            {filters.sort.map((element)=>(
                <MenuItem value={element.value}> {element.label} </MenuItem> 
                 ))
            }
            </Select>
        </FormControl> 
        <FormControl variant="filled"  size='small' sx={{minWidth: 150 }}>
        <InputLabel    id="price-select-standard-label">Price Range</InputLabel>
          <Select className={classNames(styles.select)}  variant='outlined' value={prices} onChange = {handlePriceChange} labelId="price-select-standard-label" >
          {filters.price.map((element)=>(
                <MenuItem value={element.value}> {element.label} </MenuItem> 
            ))
            }
          </Select>
        </FormControl>        
          <TextField  className  = {classNames(styles.search)}  variant="standard" InputProps={{startAdornment: <InputAdornment position="start"><Search className  = {classNames(styles.icon)}/></InputAdornment>}}></TextField>
          </Stack>
      </div>
      
    );
  }