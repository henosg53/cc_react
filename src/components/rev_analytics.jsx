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

            <Stack className="w-full flex justify-between" spacing={2} direction={'row'}>
                <BarGraph/>

                <Stack className="bg-gray-200 p-2 rounded w-[40%]">
                    <Stack>
                        <Typography variant='subtitle1' ><b>Packages</b></Typography>
                        {/* <Typography variant='p' >Stats</Typography> */}
                    </Stack>
                    <TwoSimplePieChart/>
                </Stack>
                
            </Stack>

            <Stack direction={'row'} spacing={2} className="flex w-full justify-around">

                <Stack className="w-full bg-gray-200 p-2 flex flex-col items-start">
                    <Typography variant='subtitle1' ><b>Archillary attachment rate</b></Typography>
                    <Typography variant='subtitle1' > 0%</Typography>
                </Stack>

                <Stack className="w-full bg-gray-200 p-2 flex flex-col items-start">
                    <Typography variant='subtitle1' ><b>Archillary attachment rate</b></Typography>
                    <Typography variant='subtitle1' > 0%</Typography>
                </Stack>

                <Stack className="w-full bg-gray-200 p-2 flex flex-col items-start">
                    <Typography variant='subtitle1' ><b>Archillary attachment rate</b></Typography>
                    <Typography variant='subtitle1' > 0%</Typography>
                </Stack>

            </Stack>

            <Stack  direction={'row'} spacing={2} className="flex  justify-center items-center w-full">
                
                <Stack spacing={2} className="w-full">

                    <Stack className=" bg-gray-200 p-2 flex flex-col items-start">
                        <Typography variant='subtitle1' ><b>Top 1 airline by volume</b></Typography>
                        <Typography variant='subtitle1' > 1. Malaysia Airlines</Typography>
                    </Stack>

                    <Stack className=" bg-gray-200 p-2 flex flex-col items-start">
                        <Typography variant='subtitle1' ><b>Top 2 routes by volume</b></Typography>
                        <Stack>
                            <Typography variant='subtitle1' > 1. LOS-LHR</Typography>
                            <Typography variant='subtitle1' > 2. LOS-DXB</Typography>
                        </Stack>
                    </Stack>
                    
                </Stack>
                <Stack spacing={2} className="w-full">

                    <Stack className=" bg-gray-200 p-2 flex flex-col items-start">
                        <Typography variant='subtitle1' ><b>Top 1 airline by value</b></Typography>
                        <Typography variant='subtitle1' > 1. Malaysia Airlines</Typography>
                    </Stack>

                    <Stack className=" bg-gray-200 p-2 flex flex-col items-start">
                        <Typography variant='subtitle1' ><b>Top 2 routes by value</b></Typography>
                        <Stack>
                            <Typography variant='subtitle1' > 1. STN-LOS</Typography>
                            <Typography variant='subtitle1' > 2. LOS-STN</Typography>
                        </Stack>

                    </Stack>

                </Stack>
                
            </Stack>
            <Stack className="w-full">
                <Tips/>
            </Stack>
            <Stack className="w-full bg-gray-100 flex flex-col items-start">
                <Typography variant='h6' fontStyle={'bold'} > Ancillaries Sold</Typography>
                <Stack className="flex flex-col items-start">

                    <Typography variant='h2' fontStyle={'bold'} > 01</Typography>
                    <BarGraph/>

                </Stack>

            </Stack>

            <Stack className="w-full bg-gray-100 flex flex-col items-start">
                
                <Typography variant='h6' fontStyle={'bold'} > Gross Ancillaries Volume</Typography>

                <Stack className="flex flex-col items-start">
                    <Typography variant='h2' fontStyle={'bold'} > 234,900</Typography>
                    <BarGraph/>

                </Stack>

            </Stack>
        </Stack>
    )
}