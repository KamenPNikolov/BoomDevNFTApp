import * as React from 'react';
import classNames from "classnames";
import Collector from './Collector';
import styles from "./CollectorColumn.module.scss"
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function CollectorColumn({items=[]}) {
    //console.log(items);
  return (
    <div  className={classNames(styles.container)} >
      
       { items.map(({name,nftsCount,avatar,verified,id},index) => (
         <Collector name ={name} nftsCount={nftsCount} avatar={avatar} verified={verified}  id={id} type={(index+1)%2} ></Collector>
       )
       )}
    </div>
    
  );
}