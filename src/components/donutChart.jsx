import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';



const data2 = [
  { label: 'Flight', value: 2750000 },
  { label: 'Stays', value: 2750000 },
  { label: 'Tours', value: 2750000 },
];

export default function TwoSimplePieChart() {
  return (
    <PieChart
      series={[
        // {
        //   outerRadius: 80,

        //   data: data1,
        // },
        {
          data: data2,
        //   cx: 500,
        //   cy: 200,
          innerRadius: 40,
          outerRadius: 80,
        },
      ]}
      height={300}
      // slotProps={{
      //   legend: {  },
      // }}
    />
  );
}
