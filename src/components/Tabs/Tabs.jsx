import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TabPanel = (props) => {
    const {children, value, index, ...other} = props;
    
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p:3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

const allyProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabPanel-${index}`,
    }
}

export default function BasicTabs({value, handleChange}) {
    // const [value, setValue] = React.useState(0);
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // }
    return (
        <Box sx={{width: "100%"}}>
            <Box sx={{borderBottom: 1, borderColor: "divider"}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit" indicatorColor="secondary">
                    <Tab label= "All" {...allyProps(0)} />
                    <Tab label= "Rock" {...allyProps(1)} />
                    <Tab label= "Pop" {...allyProps(2)} />
                    <Tab label= "Jazz" {...allyProps(3)} />
                    <Tab label= "Blues" {...allyProps(4)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                All
            </TabPanel>
            <TabPanel value={value} index={1}>
                Rock
                </TabPanel>
                <TabPanel value={value} index={2}>
                Pop
                </TabPanel>
                <TabPanel value={value} index={3}>
                Jazz
                </TabPanel>
                <TabPanel value={value} index={4}>
                Blues
                </TabPanel>
        </Box>
    );
}