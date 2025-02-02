'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



interface DataPoint {
    month: string;
    value: number;
}

interface LineChartComponentProps {
    data: DataPoint[];
}

export default function LineChartComponent({ data }: LineChartComponentProps) {
    return (
        <div className="w-full h-60 p-4 bg-white rounded-lg ">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ left: 10, right: 10 }}>
                    <defs>
                        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow
                                dx="2" dy="8" stdDeviation="5"
                                floodColor="#4F7396"
                                floodOpacity="0.8"
                            />
                        </filter>
                    </defs>
                    <XAxis
                        dataKey="month"
                        stroke="#4F7396"
                        tick={{ fill: '#4F7396' }}
                        axisLine={false}
                        tickLine={false}
                        interval={0}
                    />

                    <Tooltip
                        contentStyle={{
                            background: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#4F7396"
                        strokeWidth={2}
                        dot={false}
                        filter="url(#shadow)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
