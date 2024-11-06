import React, { useContext } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { GadgetsContext } from "../../context/GadgetsContext";
import { Helmet } from "react-helmet";

const Statistics = () => {
  const { items } = useContext(GadgetsContext); // Assume items contain your product data

  // Prepare the data for the chart
  const chartData = items.map((item) => ({
    name: item.product_title,
    price: item.price,
  }));

  return (
    <div>
        <Helmet>
        <title>Statistics - Gadget Heaven</title>
        <meta name="description" content="Welcome to the best gadgets store with the latest products!" />
        <link rel="shortcut icon" href="/analysis.png" type="image/x-icon" />
      </Helmet>
      <div className="bg-customPurple h-max rounded-xl pb-10 pt-5 text-white">
      <h3 className="text-[32px] font-bold text-center mb-4">
          Product-Price Statistics
        </h3>
        <p className="text-center   px-5">
  Explore insightful statistics on product prices, helping you make <br /> informed decisions on your next gadget purchase.
</p>
      </div>
      <div className="h-[500px] w-full mb-16 mt-5">
        
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
    </div>
  );
};

export default Statistics;
