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
import dataActivity from "../data/activity.json";
import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";
export default function Index() {
  //return <Example />;
  const [featuredCards, setFeaturedCards] = React.useState([]);
  const [trendingCards, setTrendingCards] = React.useState([]);
  const [nftCards,setNftCards] = React.useState([]);
React.useEffect(() => {
    setFeaturedCards(dataFeatured);
    setTrendingCards(dataTrending);
    setNftCards(dataNfts);
}, []);
  
  const propsForTrending = [
     {name:"Ivy",
     user:{avatar:{url:"images/avatar.png"},verified:true},
     mediaUrl:"images/nft.jpg",
     price:1,
     currency:"ETH",
     timeLeft: 100000
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
  return <div style={{width:"100%"}}>
    <Header></Header>
    
    <Featured items = {featuredCards}></Featured>  
     <Trending cards = {propsForTrending}></Trending>
    <TopCollectors collectors = {itemsForCollector}></TopCollectors>
    <How items = {itemsForHow}  title = "How it works" description = "What is going on here? SOme long text for testing. Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda"
       link = "https://en.wikipedia.org/wiki/Non-fungible_token" ></How>
    <Auctions cards = {nftCards}></Auctions>
    <Footer></Footer>
    

  </div>;
}
