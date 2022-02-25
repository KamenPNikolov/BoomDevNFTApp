import * as React from "react";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Hero from "../../src/components/hero/Hero";
import ActivityList from "../../src/components/activity/ActivityList";
import activities from "../../data/activity.json";
import activityFilt from "../../data/filtersActivity.json";
import ActivityFilters from "../../src/components/activity/ActivityFilters";

export default function ActivityPage(){
    return (
        <div style={{width:"100%"}}>   
            <Header></Header>
            <Hero text="Activity"></Hero>
          { activityFilt && <ActivityFilters filters={activityFilt}></ActivityFilters>}
           { activities && <ActivityList items={activities}></ActivityList>}
            <Footer></Footer>
        </div>
        );
}