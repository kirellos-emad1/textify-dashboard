'use client';
import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';



const CustomBar = (props: any) => {
    const { x, y, width, height } = props;
    // Make the bar thinner by reducing its width and centering it
    const barWidth = 32; // Thinner bar width
    const xOffset = (width - barWidth) / 2;

    return (
        <g>
            <rect
                x={x + xOffset}
                y={y}
                width={barWidth}
                height={height}
                fill="#f0f1f6"
                rx={4}
            />
            <line
                x1={x + xOffset}
                y1={y}
                x2={x + xOffset + barWidth}
                y2={y}
                stroke="#666666"
                strokeWidth={2}
                strokeLinecap="round"
            />
        </g>
    );
};

interface DataPoint {
    month: string;
    value: number;
}

interface BarChartComponentProps {
    data: DataPoint[];
}

const BarChartComponent = ({data}: BarChartComponentProps) => {

    return (
        <div className="w-full h-60  bg-white rounded-lg ">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 15 }}
                    barGap={62}


                >
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#4F7396' }}
                    />

                    <Tooltip
                        contentStyle={{
                            background: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                    <Bar
                        dataKey="value"
                        shape={<CustomBar />}

                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;