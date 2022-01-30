import * as React from 'react';
import classNames from "classnames";

export default function Logo(props) {

  return (
    <div >
      <img src =  {props.type=="muted"?"/images/logo-muted.svg" :"/images/logo.svg"}></img>
    </div>
  );
}

