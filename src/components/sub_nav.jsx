import { Button, Stack, Typography } from "@mui/material"

export const SubNav = () =>{
    return(
        <Stack className="flex flex-col justify-around items-center" direction={'row'} spacing={4}>
            <Typography variant='p'>Welcome back, <b>Yeabsira Abe</b></Typography>
            <Stack direction={'row'} spacing={2}>
                <Button variant={"contained"}>Create a new order</Button>
                <Button variant={"contained"}>View orders needing review</Button>
                <Button variant={"contained"}>View pending orders</Button>
            </Stack>

        </Stack>
    )
}