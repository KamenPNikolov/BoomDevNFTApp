import * as React from 'react';
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import styles from "./ProductTabs.module.scss";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Chip } from '@mui/material';
import * as myModule from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import User from '../user/User';
import  Typography  from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { format, formatDistance, formatRelative, subDays, parseISO } from 'date-fns'



export default function ProductTabs({text="", bids=[]}){
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div className={classNames(styles["product-tabs"])} >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
              <TabList onChange={handleChange} >
                 <Tab label="Details" value="1" />
                  <Tab label="Bids" value="2" />
                </TabList>
            </Box>
          <TabPanel value="1"  className={classNames(styles["tab-details"])}><p>{text}</p></TabPanel>
          <TabPanel value="2" className={classNames(styles["tab-bids"])}>
          <Table>
          {bids.map((bid,index) => (
        <TableRow className={classNames("table-row-"+index,styles[(index+1)%2==0?"dark":"light"])} sx={{ borderColor: "Background"}} >
        <TableCell align="left"><User  name={bid.user.name} avatar={bid.user.avatar} verified = {bid.user.verified}></User></TableCell>
        <TableCell align="center"  className={classNames(styles["amount"])}>{bid.amount + " ETH"}</TableCell>
        <TableCell align="center">{formatDistance(parseISO(bid.date), new Date(), { addSuffix: true })}</TableCell>
      </TableRow>
       )
       )}
        </Table>
          </TabPanel>
          
      </TabContext>
        </div>
        
      );
}