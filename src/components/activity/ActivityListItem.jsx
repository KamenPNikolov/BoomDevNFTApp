import { format, formatDistance, formatRelative, subDays, parseISO } from 'date-fns';
import Avatar from "../avatar/Avatar";
import Stack from '@mui/material/Stack';
import classNames from "classnames";
import styles from "./ActivityListItem.module.scss";
import Link from "../link/Link";

export default function ActivityListItem({user,created_at,nft, type="like"}){
    //adjust for different profiles

    return (
        <div className={classNames(styles["activity-list-item"])}>
           <Stack direction = "row" spacing = {10} alignItems="center" justifyContent="flex-start" sx={{marginLeft:3}}>
            <Avatar  className={classNames(styles.avatar)} verified = {user.verified} url = {user.avatar.url} size={60}></Avatar>
            <div>
            
                <p><b>{user.username}</b> {type=="like"?" liked '":" bought '"} <Link href={"/product/"+ nft.id} color="secondary">{nft.name}</Link> {"' by "} <Link href={"/profile/"+nft.owner.id} color="secondary">{nft.owner.username}</Link> </p>
                <p>{formatDistance(parseISO(created_at), new Date(), { addSuffix: true })}</p>
            </div>
           </Stack>

        </div>

    );
}