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

export default function Copyright() {
  const userProp = {avatar: {url: "/images/avatar.png"},verified: true};
  const propsForTrending = [
     {name:"Ivy",
     user:{avatar:{url:"images/avatar.png"},verified:true},
     mediaUrl:"images/nft.jpg",
     price:1,
     currency:"ETH",
     
    }
    ,{
      name:"Judie",
      user:{avatar:{url:"images/avatar.png"},verified:true},
      mediaUrl:"images/nft.jpg",
      price:2.3,
      currency:"ETH" 
    }
    ,{
      name:"Juniper",
      user:{avatar:{url:"images/avatar.png"},verified:true},
      mediaUrl:"images/nft.jpg",
      price:5,
      currency:"ETH" 
    }
    ,{
      name:"Maples",
      user:{avatar:{url:"images/avatar.png"},verified:true},
      mediaUrl:"images/nft.jpg",
      price:10,
      currency:"ETH" 
    }
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
  return (
    <div className={classNames(styles.wrapper)}>

     {/*  <User verified = {true} size = {60} avatar = "/images/avatar.png" name = "kemimaro" info="140 items" ></User> */ }
      <Footer></Footer>
      <Trending cards = {propsForTrending}></Trending>
      <How items = {itemsForHow}  title = "How it works" description = "What is going on here? SOme long text for testing. Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda"
       link = "https://en.wikipedia.org/wiki/Non-fungible_token" ></How>
     <Card name = "Monkey" mediaUrl="https://cdn.vox-cdn.com/thumbor/2xj1ySLIz1EZ49NvSsPzq8Itjyg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
      user = {userProp} price = "12.4" currency = "ETH" likes={1100} timeLeft = {100000}
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
