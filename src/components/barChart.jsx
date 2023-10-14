import { BarChart } from "@mui/x-charts"

export const BarGraph = () => {
    return(
        <div>
            <BarChart
            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
            series={[
                { data: [4, 3, 5], stack: 'A', label: 'Series A1' },
                { data: [1, 6, 3], stack: 'B', label: 'Series B2' },
                { data: [2, 5, 6], stack: 'C', label: 'Series C2' }]}
            width={500}
            height={300}
            />
        </div>
    )
}