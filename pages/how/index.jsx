import * as React from "react";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Hero from "../../src/components/hero/Hero";
import Description from "../../src/components/description/Description";

export default function HowPage(){
return (
    <div style={{width:"100%"}}>   
<Header></Header>
<Hero text = "HOW IT WORKS"></Hero>
<Description text = "What is going on here? SOme long text for testing. Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda Yada yada yada ydayda"
    image = "https://upload.wikimedia.org/wikipedia/commons/7/71/Small_pie.svg"
    ></Description>
<Footer></Footer>
</div>
);
}