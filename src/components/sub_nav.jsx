import { Button, Stack, Typography } from "@mui/material"

export const SubNav = () =>{
    
    return(
        <Stack className="w-full flex flex-col justify-around items-center" direction={'row'} spacing={4}>
            <Typography variant='subtitle1'>Welcome back, <b>Yeabsira Abe</b></Typography>
            <div  className="flex gap-5 sm:flex-row flex-col">
                <Button size={'small'}  variant={"contained"} style={{ backgroundColor: "black" }}>Create a new order</Button>
                <Button size={'small'} variant={"contained"} style={{ backgroundColor: "black" }}>View orders needing review</Button>
                <Button size={'small'} variant={"contained"} style={{ backgroundColor: "black" }}>View pending orders</Button>
            </div>

        </Stack>
    )
}