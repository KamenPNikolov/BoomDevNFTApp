import * as React from 'react';
import classNames from "classnames";
import Logo from '../logo/Logo';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import styles from "./Header.module.scss"
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth = 'xl'>
      <Grid container spacing={10}>
        <Grid item xs="auto">
        <Logo></Logo>
        </Grid>
        <Grid item xs>
        <Input className  = {classNames(styles.search)} defaultValue = "Find items, users and activities" startAdornment={<InputAdornment position="start"><SearchIcon className  = {classNames(styles.icon)}/></InputAdornment>}></Input>
        </Grid>
        <Grid item xs>
        <Button className  = {classNames(styles.button)} variant="text" onClick={() =>  router.push('/')}>Home</Button>
        <Button  variant="text">Activity</Button>
        <Button   variant="contained" >Explore</Button>
        </Grid>
      </Grid>
      </Container>
    </div>      
    );
  }