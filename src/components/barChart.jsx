import { BarChart } from "@mui/x-charts"

export const BarGraph = () => {
    return(
        <div className="bg-gray-200 h-fit">
            <BarChart
            xAxis={[{ scaleType: 'band', data: ['Mar 9', 'Mar 21', 'Apr 2'] }]}
             
            series={[
                { data: [0, 30, 200], stack: 'A', label: 'Flights' },
                { data: [200, 2500, 4500], stack: 'B', label: 'Stays' },
                { data: [20, 500, 800], stack: 'C', label: 'Tours' }]}
            width={500}
            height={300}
            />
        </div>
    )
}