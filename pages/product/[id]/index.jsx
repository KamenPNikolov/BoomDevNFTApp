import { useRouter } from 'next/router';
import ProductContainer from "../../../src/components/product/ProductContainer";
import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import dataNfts from "../../../data/nfts.json";
import * as React from 'react';

export default function ProductPage() {
    const [nfts, setNfts] = React.useState([]);
    React.useEffect(() => {
       
        setNfts(dataNfts);
    }, [dataNfts]);

    const router = useRouter();
    const { id } = router.query;
    const nft = nfts.find(x => x.id==361);
    console.log(router.query);
    console.log(nft);
    const itemsForBids=[
        {
          user:{
            avatar: "/images/avatar.png",
            name: "kemimaro1",
            verified: true
          },
          amount: 3,
          date: "2019-09-25T14:34:32.999Z"
        },
        {
          user:{
            avatar: "/images/avatar.png",
            name: "kemimaro2",
            verified: false
          },
          amount: 2,
          date: "2020-09-25T14:34:32.999Z"
        },
        {
          user:{
            avatar: "/images/avatar.png",
            name: "kemimaro3",
            verified: true
          },
          amount: 1,
          date: "2019-09-25T14:34:32.999Z"
        }
      ];

    return (
    <div style={{width:"100%"}}>
    <Header></Header>
    <ProductContainer name={nft.name} source={nft.source} owner={nft.owner} price = {nft.price} currency = {nft.currency} likes = {nft.likes} auction_end={nft.auction_end} 
    details = {nft.details}
    bids={nft.bids}
    ></ProductContainer>
    <Footer></Footer>
     </div>);
}