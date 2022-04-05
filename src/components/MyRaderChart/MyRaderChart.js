import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';
import useChartData from '../../hooks/useChartData';

const MyRaderChart = () => {
    const [data] = useChartData();
    return (
        <div>
            <h2 className='text-xl font-bold'>RadarChart</h2>
            <RadarChart outerRadius={90} width={600} height={250} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="month" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar dataKey="revenue" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar dataKey="investment" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </div>
    );
};

export default MyRaderChart;