import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  Area } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import Papa from 'papaparse';

import csvData from './CSV Data - WM-WD.csv'; // Update the path to your CSV file

import './LineChart.css'; // Create a CSS file for your component styles

const BoxplotCharts = () => {
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
      const boxplotData = chartData.map((row) => ({
        name: row.name,
        value: row[key],
      }));

      const COLORS = colorScale(key);

      return (
        <div key={key} className="chart-container">
          <h2 className="chart-title">{key}</h2>
          <LineChart width={250} height={250} data={boxplotData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* Line representing median */}
            <Line type="monotone" dataKey="value" stroke={COLORS} />
            {/* Area representing the interquartile range */}
            <Area
              type="monotone"
              dataKey="value"
              fill={COLORS}
              stroke={COLORS}
              fillOpacity={0.3}
            />
          </LineChart>
        </div>
      );
    });
  };

  return <div className="total-box">{renderChart()}</div>;
};

export default BoxplotCharts;
