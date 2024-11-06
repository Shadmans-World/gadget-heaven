import React, { useContext } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GadgetsContext } from '../../context/GadgetsContext';

const Statistics = () => {
    const { items } = useContext(GadgetsContext); // Assume items contain your product data

    // Prepare the data for the chart
    const chartData = items.map(item => ({
        name: item.product_title,
        price: item.price,
    }));

    return (
        <div className="h-[500px] w-full mb-16 mt-5">
            <h2 className="text-2xl font-bold text-center mb-4">Product-Price Statistics</h2>
            <ResponsiveContainer>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
