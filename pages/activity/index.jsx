import * as React from "react";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Hero from "../../src/components/hero/Hero";
import ActivityList from "../../src/components/activity/ActivityList";
import ActivityFilters from "../../src/components/activity/ActivityFilters";

export default function ActivityPage(){
    const [activity, setActivity] = React.useState();
    const [activityFilters, setActivityFilters] = React.useState();
    async function fetchActivities(){
      const fetchJson = async ()=>{
        const response = await fetch(process.env.apiUrl+"/activities");
        const results = await response.json();  
        return results;
        };
      const jsons = await  fetchJson();
      
      setActivity(jsons.activities);
      setActivityFilters(jsons.filters);
    }
    React.useEffect(() => {
        fetchActivities();
    }, []);

    return (
        <div style={{width:"100%"}}>   
            <Header></Header>
            <Hero text={"Activity"}></Hero>
             <ActivityFilters filters={activityFilters}></ActivityFilters>
            <ActivityList items={activity}></ActivityList>
            <Footer></Footer>
        </div>
        );
}