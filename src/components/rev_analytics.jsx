import {   Button, MenuItem, Stack, TextField, Typography } from "@mui/material"
import { BarGraph } from "./barChart"
import TwoSimplePieChart from "./donutChart"
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Tips from "./tips";
import { LineGraph } from "./lineChart";


export const RevenuAnalytics = () => {
    return(
        <Stack className=" flex flex-col w-full  justify-around items-center px-2 md:px-20 lg:px-24 sm:px-24" spacing={8}>

            <div className='flex flex-col sm:flex-row gap-5 justify-between w-full' direction={"row"} spacing={4}>

                <Stack className="w-fit">
                    <h2 className="font-bold text-2xl ">Revenu Analytics</h2>
                </Stack>


                <div className='flex items-center'>
                    <Typography variant='subtitle1' color={'primary'}>Export</Typography>
                    {/* <DatePicker /> */}
                    <div  className="flex gap-3 bg-gray-100 p-2 rounded w-fit ">
                        
                        <TextField size="small" className="w-fit h-fit  bg-white " defaultValue={'W'} select  >
                            <MenuItem value={'W'} >Weekly</MenuItem>
                            <MenuItem value={'M'}>Monthly</MenuItem>
                            <MenuItem value={'Y'}>Yearly</MenuItem>
                        </TextField>
                      
                        
                        <Button variant="text" endIcon={<CalendarMonthIcon/>} disableRipple>
                            12th Oct - 12th Oct
                        </Button>
                
                    </div>
                    

                </div>
            </div>


            <div className="w-full flex flex-wrap sm:flex-nowrap gap-5" direction={"row"} spacing={2}>

                <Stack className='blueGradient rounded p-2 w-full'>
                    <Typography variant='subtitle1' color={'white'}>Total</Typography>
                    <Typography variant='subtitle1' color={'white'}>10,234,900</Typography>    
                </Stack>

                <Stack className='bg-gray-100 rounded p-2 w-full'>
                    <Typography variant='subtitle1'>Flights</Typography>
                    <Typography variant='subtitle1'>10,234,900</Typography>
                </Stack>

                <Stack className='bg-gray-100 rounded p-2 w-full'>
                    <Typography variant='subtitle1'>Stays</Typography>
                    <Typography variant='subtitle1'>10,234,900</Typography>
                </Stack>

                <Stack className='bg-gray-100 rounded p-2 w-full'>
                    <Typography variant='subtitle1'>Tours</Typography>
                    <Typography variant='subtitle1'>10,234,900</Typography>
                </Stack>

                <Stack className='bg-gray-100 rounded p-2 w-full'>
                    <Typography variant='subtitle1'>Commisions</Typography>
                    <Typography variant='subtitle1'>10,234,900</Typography>
                </Stack>

            </div>

            <div className="w-full flex flex-col sm:flex-row gap-5 justify-between"  >
                <BarGraph cn={"w-full"}  />

                <Stack className="bg-gray-100 p-2 rounded sm:w-[40%] ">
                    <Stack>
                        <Typography variant='subtitle1' ><b>Packages</b></Typography>
                        {/* <Typography variant='p' >Stats</Typography> */}
                    </Stack>
                    <TwoSimplePieChart/>
                </Stack>
                
            </div>

            <div direction={'row'} spacing={2} className="flex flex-col sm:flex-row w-full gap-5 justify-around ">

                <Stack className="w-full bg-gray-100 p-2 flex flex-col items-start">
                    <Typography variant='subtitle1' ><b>Archillary attachment rate</b></Typography>
                    <Typography variant='subtitle1' > 0%</Typography>
                </Stack>

                <Stack className="w-full bg-gray-100 p-2 flex flex-col items-start">
                    <Typography variant='subtitle1' ><b>Archillary attachment rate</b></Typography>
                    <Typography variant='subtitle1' > 0%</Typography>
                </Stack>

                <Stack className="w-full bg-gray-100 p-2 flex flex-col items-start">
                    <Typography variant='subtitle1' ><b>Archillary attachment rate</b></Typography>
                    <Typography variant='subtitle1' > 0%</Typography>
                </Stack>

            </div>

            <Stack  direction={'row'} spacing={2} className="flex  justify-center items-center w-full">
                
                <Stack spacing={2} className="w-full">

                    <Stack className=" bg-gray-100 p-2 flex flex-col items-start">
                        <Typography variant='subtitle1' ><b>Top 1 airline by volume</b></Typography>
                        <Typography variant='subtitle1' > 1. Malaysia Airlines</Typography>
                    </Stack>

                    <Stack className=" bg-gray-100 p-2 flex flex-col items-start">
                        <Typography variant='subtitle1' ><b>Top 2 routes by volume</b></Typography>
                        <Stack>
                            <Typography variant='subtitle1' > 1. LOS-LHR</Typography>
                            <Typography variant='subtitle1' > 2. LOS-DXB</Typography>
                        </Stack>
                    </Stack>
                    
                </Stack>
                <Stack spacing={2} className="w-full">

                    <Stack className=" bg-gray-100 p-2 flex flex-col items-start">
                        <Typography variant='subtitle1' ><b>Top 1 airline by value</b></Typography>
                        <Typography variant='subtitle1' > 1. Malaysia Airlines</Typography>
                    </Stack>

                    <Stack className=" bg-gray-100 p-2 flex flex-col items-start">
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
            <Stack className="w-full bg-gray-100 flex p-3 flex-col items-start rounded-lg">
                <Typography variant='h6' fontStyle={'bold'} > Ancillaries Sold</Typography>
                <Stack className="flex flex-col items-start w-full">

                    <Typography variant='h2' fontStyle={'bold'} > 01</Typography>
                    <BarGraph cn={"w-full"}/>

                </Stack>

            </Stack>

            <Stack className="w-full bg-gray-100 flex p-3 flex-col items-start rounded-lg">
                
                <Typography variant='h6' fontStyle={'bold'} > Gross Ancillaries Volume</Typography>

                <Stack className="flex flex-col items-start w-full">
                    <Typography variant='h2' fontStyle={'bold'} > 234,900</Typography>
                    <LineGraph cn={'w-full'}/>

                </Stack>

            </Stack>
        </Stack>
    )
}