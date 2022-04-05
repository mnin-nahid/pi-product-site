import React, { useEffect, useState } from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const MyPieChart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div>
            <PieChart width={730} height={250}>
                <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default MyPieChart;