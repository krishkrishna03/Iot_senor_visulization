import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import Papa from 'papaparse';

import csvData from './CSV Data - SR-AQ.csv'; // Update the path to your CSV file

import './AreaCharts.css'; // Create a CSS file for your component styles

const AreaCharts = () => {
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
      const areaData = chartData.map((row) => ({
        name: row.name,
        value: row[key],
      }));

      const COLORS = colorScale(key);

      return (
        <div key={key} className="chart-container">
          <h2 className="chart-title">{key}</h2>
          
          <AreaChart width={250} height={250} data={areaData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="value"
              fill={COLORS}
              stroke={COLORS}
            />
          </AreaChart> 
        </div>
        
      );
    });
  };

  return <div className="total-box">{renderChart()}</div>;
  
};

export default AreaCharts;
