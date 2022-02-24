import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import filtersExplore from "../../data/filtersExplore.json";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import nfts from "../../data/nfts.json";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Card from "../../src/components/card/Card";


export default function ExplorePage(){
    return (

        <div style={{width:"100%"}}>   
        <Header></Header>
        <Container maxWidth="xl" sx={{marginTop: 5, marginBottom: 10}}>

           <Grid container  direction="row" justifyContent="space-between"  spacing = {3} alignItems="flex-start">
                 <Grid item xs="3"  >
                    <ExploreTitle text="Explore"></ExploreTitle>
                 </Grid>
                <Grid  item xs = "7" >
                    {filtersExplore && <ExploreFilters filters={filtersExplore}></ExploreFilters>}
                </Grid>
            </Grid> 
            <Grid container spacing={3} maxWidth="lg" sx={{marginLeft: 3}}>
            {nfts.map((nft) => (
                <Grid item xs="3" >
                <Card name={nft.name} mediaUrl={nft.source.url} user = {nft.owner} price = {nft.price} currency =  {nft.currency} likes={nft.likes}></Card>
                </Grid>
                 )
                )}
            </Grid> 
        </Container>
        <Footer></Footer>
        </div>
    );
}