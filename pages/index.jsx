import Example from "../src/components/example/Example";
import * as React from 'react';
import Header from "../src/components/header/Header";
import Avatar from "../src/components/avatar/Avatar";
import User from "../src/components/user/User";
import Card from "../src/components/card/Card";
import Trending from "../src/components/trending/Trending";
import Footer from "../src/components/footer/Footer";
import Step from "../src/components/how/Step";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions" ;
import Featured from "../src/components/featured/Featured";
import Collector from "../src/components/collectors/Collector";
import CollectorColumn from "../src/components/collectors/CollectorColumn";
import TopCollectors from "../src/components/collectors/TopCollectors";
import { format, formatDistance, formatRelative, subDays, parseISO } from 'date-fns';



export default function Index() {
  //return <Example />;
  const [featuredCards, setFeaturedCards] = React.useState([]);
  const [trendingItems, setTrendingItems] = React.useState([]);
  const [trendingFilters, setTrendingFilters] = React.useState();
  const [auctions,setAuctions] = React.useState();
  const [auctionFilter,setAuctionFilter] = React.useState();
  const [collectors,setCollectors] = React.useState();
  const [collectorFilters,setCollectorFilters] = React.useState();


  async function fetchFeatured(){
    const fetchJson = async ()=>{
      const response = await fetch(process.env.apiUrl+"/featured");
      const results = await response.json();  
      return results;
      };
    const jsons = await  fetchJson();
    jsons.nfts[0].cols = 3;
    jsons.nfts[0].rows = 2;
    setFeaturedCards(jsons.nfts);
  }
  async function fetchTrending(){
    const fetchJson = async ()=>{
      const response = await fetch(process.env.apiUrl+"/trending");
      const results = await response.json();  
      return results;
      };
    const jsons = await  fetchJson();
    setTrendingItems(jsons.nfts);
    setTrendingFilters(jsons.filters);
    
  }
  async function fetchAuctions(){
    const fetchJson = async ()=>{
      const response = await fetch(process.env.apiUrl+"/live-auctions");
      const results = await response.json();  
      return results;
      };
    const jsons = await  fetchJson();
    setAuctions(jsons.nfts);
    setAuctionFilter(jsons.filters);
  }
  async function fetchCollectors(){
    const fetchJson = async ()=>{
      const response = await fetch(process.env.apiUrl+"/top-collectors");
      const results = await response.json();  
      return results;
      };
    const jsons = await  fetchJson();
    
    const nfts = jsons.users.sort((a, b) => (a.nftCount > b.nftCount) ? -1 : 1);
    setCollectors(nfts);
    setCollectorFilters(jsons.filters);
    console.log(jsons);
  
  }



  
React.useEffect(() => {
   fetchFeatured();
   fetchTrending();
   fetchAuctions();
   fetchCollectors();
}, []);
  
 
  const itemsForHow = [
      {
        title: "Digital Currency",
        description: "What is going on here? SOme long text for testing. Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda"
      },
      {
        title: "Crypto Wallets",
        description: "What is going on here? SOme long text for testing. Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda"
      }
      ,
      {
        title: "BUM.",
        description: "What is going on here? SOme long text for testing. Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda"
      }
  ];
  const itemsForCollector = [
    {
      name: "first",
      nftsCount: "23",
      avatar:  "/images/avatar.png",
      verified: true,
    },
    {
      name: "second",
      nftsCount: "2",
      avatar:  "/images/avatar.png",
      verified: true,
    },
    {
      name: "third",
      nftsCount: "234",
      avatar:  "/images/avatar.png",
      verified: false,
    },
    {
      name: "first",
      nftsCount: "23",
      avatar:  "/images/avatar.png",
      verified: true,
      
    },
    {
      name: "second",
      nftsCount: "2",
      avatar:  "/images/avatar.png",
      verified: true,
     
    },
    {
      name: "third",
      nftsCount: "234",
      avatar:  "/images/avatar.png",
      verified: false,
      
    },
    {
      name: "first",
      nftsCount: "23",
      avatar:  "/images/avatar.png",
      verified: true,
    },
    {
      name: "second",
      nftsCount: "2",
      avatar:  "/images/avatar.png",
      verified: true,
    },
    {
      name: "third",
      nftsCount: "234",
      avatar:  "/images/avatar.png",
      verified: false,
    },
    {
      name: "first",
      nftsCount: "23",
      avatar:  "/images/avatar.png",
      verified: true,
      
    },
    {
      name: "second",
      nftsCount: "2",
      avatar:  "/images/avatar.png",
      verified: true,
     
    },
    {
      name: "third",
      nftsCount: "234",
      avatar:  "/images/avatar.png",
      verified: false,
      
    }
  ];

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
const itemsForCollectionFilter = 
  {
    sort: [
      { label: "Name (Ascending)", value: 1 },
      { label: "Name (Descending)", value: 2 },
    ],
    price: [
      { label: "0.3 - 0.5 ETH", value: 3 },
      {
        label: "0.5 - 2 ETH",
        value: 4,
      },
      {
        label: "2- 3 ETH",
        value: 5,
      },
    ],
    };


  return <div style={{width:"100%"}}>
    <Header></Header>
    
    <Featured items={featuredCards}></Featured>  
     <Trending cards={trendingItems} filters={trendingFilters}></Trending>
    <TopCollectors collectors = {collectors} filters={collectorFilters}></TopCollectors>
    <How items = {itemsForHow}  title = "How it works" description = "What is going on here? SOme long text for testing. Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda"
       link = "how" ></How>
    <Auctions cards={auctions} filters={auctionFilter}></Auctions> 
    <Footer></Footer>
  </div>;
}
