import { IconButton } from "@mui/material"
import SearchRoundedIcon from '@mui/icons-material/SearchOffRounded';


export const SearchBar = () =>{
    return(
        <div className="w-full flex bg-white rounded">
            <IconButton className="w-full " variant={'contained'} color={'blue'} size={'small'}> <input className="w-full p-1" type='text' placeholder="Search" /><SearchRoundedIcon/></IconButton>
        </div>
    )
}