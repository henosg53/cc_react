import { BarChart } from "@mui/x-charts"

export const BarGraph = ({...props}) => {
    const style = props.cn
    const width = props.width

    return(
        <div className={`bg-gray-100 h-fit ${style}`}>
            <BarChart
            xAxis={[{ scaleType: 'band', data: ['Mar 9', 'Mar 21', 'Apr 2'] }]}
             
            series={[
                { data: [0, 30, 200], stack: 'A', label: 'Flights' },
                { data: [200, 2500, 4500], stack: 'B', label: 'Stays' },
                { data: [20, 500, 800], stack: 'C', label: 'Tours' }]}
            width={width}
            height={300}
            />
        </div>
    )
}