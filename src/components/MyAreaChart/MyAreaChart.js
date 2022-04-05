import React, { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyAreaChart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line dataKey="revenue" stroke="#8884d8" />
            <Line dataKey="sell" stroke="#82ca9d" />
            <Tooltip />
        </LineChart>
    );
};

export default MyAreaChart;