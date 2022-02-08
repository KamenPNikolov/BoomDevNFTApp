import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo";
import Header from "../header/Header";
import Avatar from "../avatar/Avatar";
import User from "../user/User";
import Card from "../card/Card";
import Trending from "../trending/Trending";
import Footer from "../footer/Footer";
import Step from "../how/Step";
import How from "../how/How";
import Auctions from "../auctions/Auctions" ;
import Featured from "../featured/Featured";
import Collector from "../collectors/Collector";
import CollectorColumn from "../collectors/CollectorColumn";
import TopCollectors from "../collectors/TopCollectors";

export default function Copyright() {
  const userProp = {avatar: {url: "/images/avatar.png"},verified: true};
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
  return (
    <div className={classNames(styles.wrapper)}>

     {/*  <User verified = {true} size = {60} avatar = "/images/avatar.png" name = "kemimaro" info="140 items" ></User> 
      <Collector name ="kemimaro" nftCount={140} verified={true} avatar = "/images/avatar.png" type = {0}></Collector>
  <Collector name ="kemimaro" nftCount={140} verified={true} avatar = "/images/avatar.png" type = {1}></Collector> 
  <CollectorColumn items={itemsForCollector}></CollectorColumn>*/}
  <TopCollectors collectors = {itemsForCollector}></TopCollectors>
      <Footer></Footer>
     {/* <Trending cards = {propsForTrending}></Trending> */}
     <Featured items = {itemsForFeatured}></Featured>
      <Auctions cards = {propsForTrending}></Auctions>
      <How items = {itemsForHow}  title = "How it works" description = "What is going on here? SOme long text for testing. Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda"
       link = "https://en.wikipedia.org/wiki/Non-fungible_token" ></How>
     <Card name = "Monkey" mediaUrl="https://cdn.vox-cdn.com/thumbor/2xj1ySLIz1EZ49NvSsPzq8Itjyg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
      user = {userProp} price = "12.4" currency = "ETH" likes={1100} timeLeft={100000}
      > </Card> 
      <Step title = "What" number = {3} description = "What is going on here? SOme long text for testing. Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda"></Step>
      <Container className={classNames(styles.container)} maxWidth="xl">
        
        <Paper className={classNames(styles.paper)}>
          <Link href="/about" color="secondary">
            Hi         
          </Link>
        </Paper>
      </Container>

    </div>
  );
}
