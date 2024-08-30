// CardPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import Papa from 'papaparse';

const CardPage = () => {
  const { id } = useParams(); // Get the id from the route parameter

  // Assuming you have data for each card in an array
  const cardsData = [
    // Add your cards data here
  ];

  // Find the selected card based on the id
  const selectedCard = cardsData.find((card) => card.id === parseInt(id, 10));

  const [pieChartData, setPieChartData] = useState(null);

  useEffect(() => {
    if (!selectedCard) {
      return;
    }

    // Assuming you have a URL for the CSV file
    const csvFileUrl = 'aq.csv';

    Papa.parse(csvFileUrl, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        // Assuming the result.data is an array of objects where each object represents a row in the CSV file
        const csvData = result.data;

        // Extract the column name for the selected card
        const columnName = selectedCard.columnName; // Replace with the actual property that holds the column name in your card object

        // Extract data for the selected column
        const columnData = csvData.map((row) => row[columnName]);

        // Generate pie chart data for the selected column
        const chartData = {
          labels: columnData,
          datasets: [
            {
              data: columnData,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#47d147', '#9966ff'],
            },
          ],
        };

        setPieChartData(chartData);
      },
    });
  }, [id, selectedCard]);

  if (!selectedCard || !pieChartData) {
    return <div>No data found for the selected card</div>;
  }

  return (
    <div>
      <h3>{selectedCard.title}</h3>
      <img src={selectedCard.image} alt={selectedCard.title} />

      <div>
        <h4>Pie Chart for {selectedCard.columnName}</h4>
        <Pie data={pieChartData} />
      </div>
    </div>
  );
};

export default CardPage;
