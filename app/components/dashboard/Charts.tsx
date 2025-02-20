import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // Adjust import based on your setup

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={200}> {/* Set width to 100% for better responsiveness */}
      <LineChart
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }} // Adjusted margins
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 6 }} /> {/* Smaller active dot */}
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

const SmallLineChartCard = () => {
  return (
    <Card className="w-auto"> {/* Smaller card width */}
      <CardHeader>
        <CardTitle className="text-lg">Sales Overview</CardTitle> {/* Smaller title */}
      </CardHeader>
      <CardContent>
        <LineChartComponent />
      </CardContent>
    </Card>
  );
};

export default SmallLineChartCard;