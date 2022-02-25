import { useRouter } from 'next/router';
import ProductContainer from "../../../src/components/product/ProductContainer";
import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import dataNfts from "../../../data/nfts.json";
import * as React from 'react';
import Container from "@mui/material/Container";

export default function Product() {
    const [product, setProduct] = React.useState();
    const router =useRouter();

    async function fetchProduct(){
      const fetchJson = async ()=>{
        const response = await fetch(process.env.apiUrl+"/nfts/"+router.query.id);
        const results = await response.json();  
        return results;
        };
      const jsons = await  fetchJson();
      setProduct(jsons);
    }
    React.useEffect(() => {
        fetchProduct();
    }, [router]);
    

    return (
        <div style={{width:"100%"}}>   
    <Header></Header>
    {product &&
    <ProductContainer name={product.name} source={product.source} owner={product.owner} price = {product.price} currency = {product.currency} likes = {product.likes} auction_end={product.auction_end} 
    details = {product.details}
    bids={product.bids}
    ></ProductContainer>
    }
    <Footer></Footer>
    </div>
    );
}