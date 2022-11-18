import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const Statistics = () => {
    const data = [
        {
            name: "React",
            qs: 8
        },
        {
            name: "JavaScript",
            qs: 9
        },
        {
            name: "CSS3",
            qs: 8
        },
        {
            name: "Git",
            qs: 11
        }
    ];
    return (
        <div className='d-flex justify-center mt-5'>
            <LineChart width={500} height={300} data={data}>
                <Line type='monotone' dataKey='qs' stroke='#82ca9d' />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div >
    );
};

export default Statistics;