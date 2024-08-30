import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import Papa from 'papaparse';

import csvData from './CSV Data - AQ.csv'; // Update the path to your CSV file

import './BarCharts.css'; // Create a CSS file for your component styles

const BarCharts = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(csvData);
        const text = await response.text();
        const parsedData = Papa.parse(text, { header: true, dynamicTyping: true });
        setChartData(parsedData.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderChart = () => {
    if (!chartData || chartData.length === 0) {
      return <p className="loading-message">Loading data...</p>;
    }

    const keys = Object.keys(chartData[0]);
    if (keys.length === 0) {
      return <p className="error-message">No data available...</p>;
    }

    const colorScale = scaleOrdinal().range(schemeCategory10.slice(0, keys.length)).domain(keys);

    return keys.map((key) => {
      const barData = chartData.map((row) => ({
        name: row.name,
        value: row[key],
      }));

      const COLORS = colorScale(key);

      return (
        <div key={key} className="chart-container">
          <h2 className="chart-title">{key}</h2>
          <BarChart width={250} height={250} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="value"
              fill={COLORS}
            />
          </BarChart>
        </div>
      );
    });
  };

  return <div className="total-box">{renderChart()}</div>;
};

export default BarCharts;
