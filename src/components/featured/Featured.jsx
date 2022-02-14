import * as React from 'react';
import classNames from "classnames";
import Button from "@mui/material/Button";
import styles from "./Featured.module.scss";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import { useRouter } from 'next/router';

export default function Featured({items = []}){
    const router = useRouter();
    const ImageArray = [];
   // console.log(items);
    for (let i=0;i<items.length;i++) {
    ImageArray.push(<ImageListItem  className={classNames(styles.image)} 
     key={items[i].image} cols={items[i].cols || 1} rows={items[i].rows || 1}
     
     >
        <img onClick={() => router.push('product/363')} src = {items[i].image} alt={items[i].title} loading="lazy"/> 
        </ImageListItem>);    
      }
    return(
        <Container className={classNames(styles.container)} maxWidth="lg">
            <ImageList
                //sx={{ width: 500, height: 450 }}
                gap = {15}
                variant="standard"
                cols={6} rows={2}>
               {ImageArray}
            </ImageList>
        </Container>


    );
}