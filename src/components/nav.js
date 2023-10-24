import { Button, IconButton, Switch, Typography } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DiamondIcon from '@mui/icons-material/Diamond';
import { SearchBar } from "./search_bar";

export default function Nav(){
    return(
        <div  className="flex items-center justify-between bg-gray-200 w-full h-16 gap-5 sm:px-5 ">
          
            <div className='flex w-full ' direction={"row"}>
                <IconButton variant={'contained'} color={'blue'} size={'small'}>
                    <DiamondIcon/>
                </IconButton>
                <Typography variant="h4"  fontStyle={'bold'} >Miles</Typography>
                
            </div>
            <div className="py-10 w-full" direction={"row"}>
                <SearchBar/>
                
            </div>
            <div className="hidden sm:visible md:flex lg:flex flex-row w-full justify-end" direction={"row"}>
                <Button  variant="text" style={{color:'gray'}}  endIcon={<Switch/>} disableElevation>Test mode</Button>
                
                {/* <Switch/> */}
            </div>

            <div className="flex w-full justify-end" direction={"row"}>
                <IconButton variant={'contained'} color={''} size={'small'}><NotificationsIcon/></IconButton>
                <IconButton variant={'contained'} color={''} size={'small'}><PersonOutlineOutlinedIcon/></IconButton>
            </div>
            
        </div>
    )
}