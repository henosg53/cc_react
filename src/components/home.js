import { Stack } from "@mui/material"
// import Tips from "./tips"

import { SubNav } from "./sub_nav"
import { RevenuAnalytics } from "./rev_analytics"

export const Home = () =>{
    return(
        <Stack className="w-full" spacing={4}>
            <SubNav/>
            <RevenuAnalytics/>
            
            {/* <Tips/> */}

        </Stack>
    )
}