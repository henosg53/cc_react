import {  Button, MenuItem, Stack, TextField, Typography } from "@mui/material"
import { BarGraph } from "./barChart"
import TwoSimplePieChart from "./donutChart"
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Tips from "./tips";


export const RevenuAnalytics=()=>{
    return(
        <Stack className="flex flex-col  justify-around items-center px-24" spacing={8}>
            <Stack className='justify-between w-full' direction={"row"} spacing={4}>
                <Stack>
                    <h2 className="font-bold text-2xl ">Revenu Analytics</h2>
                </Stack>
                <Stack className='items-center' spacing={3} direction={'row'}>
                    <Typography variant='subtitle1' color={'primary'}>Export</Typography>
                    {/* <DatePicker /> */}
                    <Stack direction={'row'} className="bg-gray-200 p-2 rounded ">
                        
                        <TextField size="small" className="w-fit h-full bg-white " defaultValue={'W'} select  >
                            <MenuItem value={'W'} >Weekly</MenuItem>
                            <MenuItem value={'M'}>Monthly</MenuItem>
                            <MenuItem value={'Y'}>Yearly</MenuItem>
                        </TextField>
                        
                        <Button variant="text" endIcon={<CalendarMonthIcon/>} disableRipple>
                            12th Oct - 12th Oct
                        </Button>
                
                    </Stack>
                    

                </Stack>
            </Stack>
            <Stack className="w-full" direction={"row"} spacing={2}>
                <Stack className='blueGradient rounded p-2 w-full'>
                    <Typography variant='subtitle1' color={'white'}>Total</Typography>
                    <Typography variant='subtitle1' color={'white'}>10,234,900</Typography>    
                </Stack>
                <Stack className='bg-gray-200 rounded p-2 w-full'>
                    <Typography variant='subtitle1'>Flights</Typography>
                    <Typography variant='subtitle1'>10,234,900</Typography>
                </Stack>
                <Stack className='bg-gray-200 rounded p-2 w-full'>
                    <Typography variant='subtitle1'>Stays</Typography>
                    <Typography variant='subtitle1'>10,234,900</Typography>
                </Stack>
                <Stack className='bg-gray-200 rounded p-2 w-full'>
                    <Typography variant='subtitle1'>Tours</Typography>
                    <Typography variant='subtitle1'>10,234,900</Typography>
                </Stack>
                <Stack className='bg-gray-200 rounded p-2 w-full'>
                    <Typography variant='subtitle1'>Commisions</Typography>
                    <Typography variant='subtitle1'>10,234,900</Typography>
                </Stack>

            </Stack>
            <Stack className="w-full" direction={'row'}>
                <BarGraph/>
                <Stack className="bg-gray-200 p-2 rounded w-full">
                    <Stack>
                        <Typography variant='subtitle1' ><b>Packages</b></Typography>
                        <Typography variant='p' >Stats</Typography>
                    </Stack>
                    <TwoSimplePieChart/>
                </Stack>
                
            </Stack>
            <Stack className="w-full">
                <Tips/>
            </Stack>
        </Stack>
    )
}