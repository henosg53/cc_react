import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import React, { useState } from "react"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import { Home } from "./home";

export const Tabs = () =>{
    const [value, setValue ] = useState('1')
    const handleChange = (event, newVal)=>{
        setValue(newVal)
    }

    return(
        
        <TabContext  value={value} onChange={handleChange} >
            <Box className='w-full' sx={{borderBottom: 1, borderColor: "divider"}}>
                <TabList className="flex gap-10 " aria-label="main tab" onChange={handleChange} textColor={'primary'} indicatorColor={'primary'} centered >
                    <Tab className="w-fit sm:w-full" label={"Home"} value='1' icon={<HomeOutlinedIcon/>} iconPosition={'start'} />
                    <Tab className="w-fit sm:w-full" label={"Order"} value='2' icon={<ShoppingCartOutlinedIcon/>} iconPosition={'start'}/>
                    <Tab className="w-fit sm:w-full" label={"Support"} value='3' icon={<SupportAgentOutlinedIcon/>} iconPosition={'start'}  />
                </TabList>

            </Box>
            <TabPanel value='1' ><Home/></TabPanel>
            <TabPanel value='2' >Order Content</TabPanel>
            <TabPanel value='3' >Support Content</TabPanel>
        </TabContext>
     
    )
}