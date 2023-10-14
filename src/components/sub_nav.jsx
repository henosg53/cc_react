import { Button, Stack, Typography } from "@mui/material"

export const SubNav = () =>{
    
    return(
        <Stack className="flex flex-col justify-around items-center" direction={'row'} spacing={4}>
            <Typography variant='subtitle1'>Welcome back, <b>Yeabsira Abe</b></Typography>
            <Stack direction={'row'} spacing={2}>
                <Button  variant={"contained"} style={{ backgroundColor: "black" }}>Create a new order</Button>
                <Button variant={"contained"} style={{ backgroundColor: "black" }}>View orders needing review</Button>
                <Button variant={"contained"} style={{ backgroundColor: "black" }}>View pending orders</Button>
            </Stack>

        </Stack>
    )
}