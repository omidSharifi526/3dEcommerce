import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartLine() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['بهار', 'تابستان', 'پاییز', 'زمستان'] }]}
      series={[{data: [4, 3, 5,4]},{ data: [1, 6, 3,7]},{ data:[2, 5, 6,2]}]}
      width={500}
      height={300}
    />
  );
}
