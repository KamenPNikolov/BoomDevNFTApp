import { format, formatDistance, formatRelative, subDays, parseISO } from 'date-fns';
import Avatar from "../avatar/Avatar";
import Stack from '@mui/material/Stack';
import classNames from "classnames";
import styles from "./ActivityListItem.module.scss";

export default function ActivityListItem({user,created_at,nft, type="like"}){


    return (
        <div className={classNames(styles["activity-list-item"])}>
           <Stack direction = "row" spacing = {1} alignItems="center" justifyContent="space-around">
            <Avatar  className={classNames(styles.avatar)} verified={user.verified} url = {user.avatar.url} size={60}></Avatar>
            <div>
                <p><b>{user.username}</b> {type=="like"?" liked ":" bought "} {nft.name+ " by "+ nft.owner.username} </p>
                <p>{formatDistance(parseISO(created_at), new Date(), { addSuffix: true })}</p>
            </div>
           </Stack>

        </div>

    );
}