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
import ProductImage from "../src/components/product/ProductImage";
import dataActivity from "../data/activity.json";
import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";
import ProductInfoStatus from "../src/components/product/ProductInfoStatus";
import ProductInfoLikes from "../src/components/product/ProductInfoLikes";
import ProductInfoCreator from "../src/components/product/ProductInfoCreator";
import ProductInfoTimer from "../src/components/product/ProductInfoTimer";
import ProductInfo from "../src/components/product/ProductInfo";
import ProductTabs from "../src/components/product/ProductTabs";
import ProductActions from "../src/components/product/ProductActions";
import ProductContainer from "../src/components/product/ProductContainer";
import Hero from "../src/components/hero/Hero";
import Description from "../src/components/description/Description";
import ProfileHero from "../src/components/profile/ProfileHero";
import ProfileUser from "../src/components/profile/ProfileUser";
import ProfileCollectionFilters from "../src/components/profile/ProfileCollectionFilters";
import profiles from "../data/profile.json";
import profileFilters from "../data/filtersProfile.json";
import ProfileCollection from "../src/components/profile/ProfileCollection";
import ActivityFilters from "../src/components/activity/ActivityFilters";
import activityFilt from "../data/filtersActivity.json";
import ActivityListItem from "../src/components/activity/ActivityListItem";
import activities from "../data/activity.json";


export default function Index() {
  //return <Example />;
  const [featuredCards, setFeaturedCards] = React.useState([]);
  const [trendingCards, setTrendingCards] = React.useState([]);
  const [nftCards,setNftCards] = React.useState([]);
  const [profileProps,setProfiles] = React.useState();
  const [profileFilterProps,setProfileFilters] = React.useState();
  
React.useEffect(() => {
    setFeaturedCards(dataFeatured);
    setTrendingCards(dataTrending);
    setNftCards(dataNfts);
    setProfiles(profiles);
    //console.log(profiles);
    setProfileFilters(profileFilters);
    //console.log(profileFilters);
}, []);
  
  const propsForTrending = [
     {name:"Ivy",
     user:{avatar:{url:"images/avatar.png"},verified:true},
     mediaUrl:"images/nft.jpg",
     price:1,
     currency:"ETH",
     timeLeft: 100000,
     likes: 11000
    }
    ,{
      name:"Judie",
      user:{avatar:{url:"images/avatar.png"},verified:true},
      mediaUrl:"images/nft.jpg",
      price:2.3,
      currency:"ETH", 
      timeLeft: 1000000
      }
    ,{
      name:"Juniper",
      user:{avatar:{url:"images/avatar.png"},verified:true},
      mediaUrl:"images/nft.jpg",
      price:5,
      currency:"ETH", 
      timeLeft: 1000000 
    }
    ,{
      name:"Maples",
      user:{avatar:{url:"images/avatar.png"},verified:true},
      mediaUrl:"images/nft.jpg",
      price:10,
      currency:"ETH", 
      timeLeft: 1000000 
    }
  ];

  const itemsForFeatured = [
    {
      image:
        "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500",
      title: "Breakfast",
      rows: 2,
      cols: 3,
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=500",
      title: "Burger",
      href: "/about",

    },
    {
      image:
        "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500&h=500",
      title: "Camera",
      href: "/about",

    },
    {
      image:
        "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=500&h=500",
      title: "Coffee",
      href: "/about",

    },
    {
      image:
        "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=500&h=500",
      title: "Hats",
      href: "/about",

    },
    {
      image:
        "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500",
      title: "Honey",
      href: "/about",

    },
    {
      image:
        "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=500&h=500",
      title: "Basketball",
      href: "/about",
    },
  ];
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
    
    <Featured items = {itemsForFeatured}></Featured>  
     <Trending cards = {propsForTrending}></Trending>
    <TopCollectors collectors = {itemsForCollector}></TopCollectors>
    <How items = {itemsForHow}  title = "How it works" description = "What is going on here? SOme long text for testing. Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda"
       link = "how" ></How>
    <Auctions cards = {propsForTrending}></Auctions>
   <ProductImage url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></ProductImage>
   <ProductInfoStatus></ProductInfoStatus>
   <ProductInfoCreator  verified = {true} avatar = "/images/avatar.png" name = "kemimaro"></ProductInfoCreator>
   <ProductInfoTimer timeEnd={Date.now()+10000000}></ProductInfoTimer>
   <ProductInfoTimer ></ProductInfoTimer>
   <ProductInfoLikes amount = {114050}></ProductInfoLikes>

   <ProductInfo title="Sample NFT" creator = { {verified:true, avatar: "/images/avatar.png", name : "kemimaro"}} price = {12} currency = "ETH" likes = {1011000} timeEnd={Date.now()+10000000} isLive={true}></ProductInfo>
    <ProductTabs text = {"What is going on here? SOme long text for testing. Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda"}
    bids={itemsForBids}>
    </ProductTabs>
    <ProductActions isLive={false} currency="ETH" buyAmount={10} bidAmount = {5} ></ProductActions>
    <ProductContainer name ="Sample NFT"  source={{url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"}} owner={{username:"kemimaro",verified:true,avatar:{url:"/images/avatar.png"}}} price = {12} currency = "ETH" likes = {1011000} auction_end={"2022-09-25T14:34:32.999Z"} 
    details = {"What is going on here? SOme long text for testing. Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda"}
    bids={itemsForBids}
    ></ProductContainer>
    <Hero text = "HOW IT WORKS"></Hero>
    <Description text = "What is going on here? SOme long text for testing. Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda"
    image = "https://upload.wikimedia.org/wikipedia/commons/7/71/Small_pie.svg"
    ></Description>

    <ActivityFilters filters={activityFilt}></ActivityFilters>
    <ActivityListItem user = {activities[0].user} created_at={activities[0].created_at } nft={activities[0].nft} type={activities[0].type}></ActivityListItem>
    <Footer></Footer>


    

  </div>;
}
