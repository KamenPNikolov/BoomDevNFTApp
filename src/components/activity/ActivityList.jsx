import { format, formatDistance, formatRelative, subDays, parseISO } from 'date-fns';
import Avatar from "../avatar/Avatar";
import Stack from '@mui/material/Stack';
import classNames from "classnames";
import styles from "./ActivityList.module.scss";
import Link from "../link/Link";
import ActivityListItem from "../activity/ActivityListItem";

export default function ActivityList({items=[]}){
    //console.log(items);
   return(
   <div className={classNames(styles["activity-list"])}>
    <Stack direction = "column" spacing = {1} alignItems="center" justifyContent="space-evenly">
     {items.map((item) => (
        <ActivityListItem user = {item.user} created_at={item.created_at } nft={item.nft} type={item.type}></ActivityListItem> 
       )
       )}
    </Stack>
    </div>
    );
}