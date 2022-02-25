import { useRouter } from 'next/router';
import ProductContainer from "../../../src/components/product/ProductContainer";
import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import dataNfts from "../../../data/nfts.json";
import * as React from 'react';
import Container from "@mui/material/Container";

export default function Product() {
    const [nft, setNft] = React.useState();
    const router =useRouter();

    async function fetchProduct(){
      const fetchJson = async ()=>{
        const response = await fetch(process.env.apiUrl+"/nfts/"+router.query.id);
        const results = await response.json();  
        return results;
        };
      const jsons = await  fetchJson();
      setNft(jsons);
    }
    React.useEffect(() => {
        fetchProduct();
    }, [router]);
    
    
    
    //console.log(router.query);
   // console.log(dataNfts);
   // const { id } = router.query;
   // const nft = nfts.find(x => x.id==(parseInt(id)));

    return (
        <div style={{width:"100%"}}>   
    <Header></Header>
    {nft &&
    <ProductContainer name={nft.name} source={nft.source} owner={nft.owner} price = {nft.price} currency = {nft.currency} likes = {nft.likes} auction_end={nft.auction_end} 
    details = {nft.details}
    bids={nft.bids}
    ></ProductContainer>
    }
    <Footer></Footer>
    </div>
    );
}