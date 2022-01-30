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

export default function Copyright() {
  const userProp = {avatar: {url: "/images/avatar.png"},verified: true};
  return (
    <div className={classNames(styles.wrapper)}>
      <User verified = {true} size = {60} avatar = "/images/avatar.png" name = "kemimaro" info="140 items" ></User> 
      <Card name = "Monkey" mediaUrl="https://cdn.vox-cdn.com/thumbor/2xj1ySLIz1EZ49NvSsPzq8Itjyg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
      user = {userProp} price = "12.4" currency = "ETH" likes={1100}
      >
        </Card> 
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
