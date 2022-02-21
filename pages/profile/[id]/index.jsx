import { useRouter } from 'next/router';
import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import * as React from 'react';
import profiles from "../../../data/profile.json";
import ProfileHero from '../../../src/components/profile/ProfileHero';
import ProfileUser from '../../../src/components/profile/ProfileUser';
import ProfileCollectionFilters from '../../../src/components/profile/ProfileCollectionFilters';
import ProfileCollection from '../../../src/components/profile/ProfileCollection';
import profileFilters from "../../../data/filtersProfile.json";


export default  function ProfilePage(){
    const [profileFilterProps,setProfileFilters] = React.useState();
    const [profile, setProfile] = React.useState([]);
    const router =useRouter();
    React.useEffect(() => {
        setProfileFilters(profileFilters);
        setProfile(profiles);
    }, [profiles,profileFilters,router]);
    //router is not usable with profile.json, because it is not an array
    //const { id } = router.query;
   // const prof = profile.find(x => x.id==(parseInt(id)));
    return (
        <div style={{width:"100%"}}>   
        <Header></Header>
            
            <ProfileHero image = "https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lkZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80"></ProfileHero>
            {profiles && <ProfileUser verified={profiles.verified} avatar = {profiles.avatar.url} name= {profiles.username} info={profiles.info}></ProfileUser>}
        {profiles && profileFilters && <ProfileCollection user = {profiles} filters = {profileFilters} items = {profiles.nfts}></ProfileCollection>}
        <Footer></Footer>
        </div>
    );
 
}