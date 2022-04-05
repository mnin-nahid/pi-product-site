import React, { useEffect, useState } from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';
import MyRaderChart from '../MyRaderChart/MyRaderChart';
import './Deshboard.css'

const Deshboard = () => {
    return (
        <div className='chart-container'>
            <div className="line-chart">
                <MyLineChart></MyLineChart>
            </div>
            <div className="area-chart">
                <MyBarChart></MyBarChart>
            </div>
            <div className="pie-chart">
                <MyPieChart></MyPieChart>
            </div>
            <div className="rader-chart">
                <MyRaderChart></MyRaderChart>
            </div>
        </div>
    );
};

export default Deshboard;