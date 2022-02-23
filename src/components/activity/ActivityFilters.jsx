import * as React from 'react';
import classNames from "classnames";
import styles from "./ActivityFilters.module.scss";
import  Typography  from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Search from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import CollectorColumn from "../collectors/CollectorColumn";
import TextField from "@mui/material/TextField";
import  InputLabel  from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import { PriceChange } from '@mui/icons-material';
import FormControl from "@mui/material/FormControl";

export default function ActivityFilters({filters={sort: [], type:[]}}) {
    const [sortBy, setSort] = React.useState();
    const [types, setType] = React.useState();
    //console.log(filters.sort);
   // console.log(filters.price);
   const handleSortChange = (event)=>{
        setSort(event.target.value);
    };
    const handleTypeChange = (event)=>{
        setType(event.target.value);
    };
    return (
      
      <div className={classNames(styles["activity-filters"])}>
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
        <InputLabel    id="type-select-standard-label">Type</InputLabel>
          <Select className={classNames(styles.select)}  variant='outlined' value={types} onChange = {handleTypeChange} labelId="type-select-standard-label" >
          {filters.type.map((element)=>(
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