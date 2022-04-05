import { Pie, PieChart, Tooltip } from 'recharts';
import useChartData from '../../hooks/useChartData';

const MyPieChart = () => {
    const [data] = useChartData();
    return (
        <div>
            <h2 className='text-xl font-bold'>PieChart</h2>
            <PieChart width={600} height={250}>
                <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default MyPieChart;