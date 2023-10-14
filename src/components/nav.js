import { Button, IconButton, Stack, Switch, Typography } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DiamondIcon from '@mui/icons-material/Diamond';
import { SearchBar } from "./search_bar";

export default function Nav(){
    return(
        <Stack direction={"row"} spacing={2}  className="flex items-center justify-around bg-gray-200 w-full h-16 px-20">
          
            <Stack direction={"row"}>
                <IconButton variant={'contained'} color={'blue'} size={'small'}>
                    <DiamondIcon/>
                </IconButton>
                <Typography variant="h4" fontFamily={'fantasy'} fontStyle={'bold'} >Miles</Typography>
                
            </Stack>
            <Stack className="py-10 w-[60%]" direction={"row"}>
                <SearchBar/>
                {/* <TextField label={'search'} className="" style={{background:"white"}} /> */}
                
            </Stack>
            <Stack className="w-auto" direction={"row"}>
                <Button  variant="text" style={{color:'gray'}}  endIcon={<Switch/>} disableElevation>Test mode</Button>
                
                {/* <Switch/> */}
            </Stack>

            <Stack direction={"row"}>
                <IconButton variant={'contained'} color={''} size={'small'}><NotificationsIcon/></IconButton>
                <IconButton variant={'contained'} color={''} size={'small'}><PersonOutlineOutlinedIcon/></IconButton>
            </Stack>
            
        </Stack>
    )
}