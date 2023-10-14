import { Stack, Typography } from "@mui/material"
import { BarGraph } from "./barChart"
import TwoSimplePieChart from "./donutChart"

export const RevenuAnalytics=()=>{
    return(
        <Stack className="flex flex-col justify-around items-center" spacing={8}>
            <Stack direction={"row"} spacing={4}>
                <Stack>
                    <h2 className="font-bold">Revenu Analytics</h2>
                </Stack>
                <Stack>
                    <h2 className="font-bold">Export</h2>

                </Stack>
            </Stack>
            <Stack direction={"row"} spacing={8}>
                <Stack className='blueGradient rounded p-2' style={{ backgroundColor: 'blue' }}>
                    <Typography variant='subtitle1' color={'white'}>Total</Typography>
                    <Typography variant='subtitle1' color={'white'}>10,234,900</Typography>    
                </Stack>
                <Stack className='bg-gray-200 rounded p-2'>
                    <Typography variant='subtitle1'>Flights</Typography>
                    <Typography variant='subtitle1'>10,234,900</Typography>
                </Stack>
                <Stack className='bg-gray-200 rounded p-2'>
                    <Typography variant='subtitle1'>Stays</Typography>
                    <Typography variant='subtitle1'>10,234,900</Typography>
                </Stack>
                <Stack className='bg-gray-200 rounded p-2'>
                    <Typography variant='subtitle1'>Tours</Typography>
                    <Typography variant='subtitle1'>10,234,900</Typography>
                </Stack>
                <Stack className='bg-gray-200 rounded p-2'>
                    <Typography variant='subtitle1'>Commisions</Typography>
                    <Typography variant='subtitle1'>10,234,900</Typography>
                </Stack>

            </Stack>
            <Stack direction={'row'}>
                <BarGraph/>
                <Stack className="bg-gray-200 p-2 rounded w-fit">
                    <Stack>
                        <Typography variant='subtitle1' ><b>Packages</b></Typography>
                        <Typography variant='p' >Stats</Typography>
                    </Stack>
                    <TwoSimplePieChart/>
                </Stack>
                
            </Stack>
        </Stack>
    )
}