import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo";
import Header from "../header/Header";
import Avatar from "../avatar/Avatar";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Avatar verified = {true} size = {180} url = "/images/avatar.png"></Avatar>
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
