import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo";
import Header from "../header/Header";
import Avatar from "../avatar/Avatar";
import User from "../user/User";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <User verified = {true} size = {60} avatar = "/images/avatar.png" name = "kemimaro" info="140 items" ></User>  
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
