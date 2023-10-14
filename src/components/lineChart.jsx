import { LineChart } from "@mui/x-charts"

export const LineGraph = ({...props}) => {
    const style = props.cn
    const width = props.width

    return(
        <div className={`bg-gray-100 h-fit ${style}`}>
            <LineChart
            xAxis={[{ scaleType: 'band', data: ['Mar 9', 'Mar 21', 'Apr 2'] }]}
             
            series={[
                { data: [0, 30, 200], },
                { data: [200, 2500, 4500],  },
                { data: [20, 500, 800],  }]}
            width={width}
            height={300}
            />
        </div>
    )
}