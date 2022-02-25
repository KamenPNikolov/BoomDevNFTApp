import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Card from "../../src/components/card/Card";


export default function ExplorePage(){
    const [nfts, setNfts] = React.useState([]);
    const [nftFilters, setNftFilters] = React.useState();
    async function fetchNfts(){
      const fetchJson = async ()=>{
        const response = await fetch(process.env.apiUrl+"/explore");
        const results = await response.json();  
        return results;
        };
      const jsons = await  fetchJson();
      console.log(jsons);
      setNfts(jsons.nfts);
      setNftFilters(jsons.filters);
    }
    React.useEffect(() => {
        fetchNfts();
    }, []);
    

    return (

        <div style={{width:"100%"}}>   
        <Header></Header>
        <Container maxWidth="xl" sx={{marginTop: 5, marginBottom: 10}}>

           <Grid container  direction="row" justifyContent="space-between"  spacing = {3} alignItems="flex-start">
                 <Grid item xs="3"  >
                    <ExploreTitle text="Explore"></ExploreTitle>
                 </Grid>
                <Grid  item xs = "7" >
                    {<ExploreFilters filters={nftFilters}></ExploreFilters>}
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