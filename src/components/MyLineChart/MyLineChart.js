import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const MyLineChart = () => {
    const [data] = useChartData();
    return (
        <div>
            <h3 className='text-xl font-bold'>LineChart</h3>
            <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line dataKey={"revenue"} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis dataKey="investment" />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default MyLineChart;