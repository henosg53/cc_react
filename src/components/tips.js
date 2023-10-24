import { Button, IconButton } from "@mui/material";
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined'
export default function Tips(){
    return(
        <div className="flex justify-between items-center bg-blue-100 w-full h-20 sm:h-16">
            
            <div className="bg-blue-600 w-3 h-full">

            </div>
            <div className="flex  sm:px-5 justify-between items-center  w-full ">
                <span>
                    {/* <Button variant="text" startIcon={<TipsAndUpdatesOutlinedIcon/>} >
                        Learn how to increase ancillary sales with our handy guides.
                    </Button> */}
                    <p className="text-blue-600 text-sm sm:text-lg">
                    <IconButton variant={'contained'} color={'primary'} size={'small'}><TipsAndUpdatesOutlinedIcon/></IconButton>
                        Learn how to increase ancillary sales with our handy guides.
                    </p>
                </span>
                {/* <button className="border border-blue-600 rounded-lg p-2 h-12 text-blue-600 text-lg">
                    VIEW GUIDES
                </button> */}
                <Button size="small" variant="outlined">
                    VIEW GUIDES
                </Button>

            </div>
        </div>
    )
}