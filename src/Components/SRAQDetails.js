import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../Styles/SRAQDetails.css';
import soil from '../Data/Sooil.jpeg';

const cardDetails = [
  { id: 1, title: 'Node -- SR-AQ-VN01-01' },

];

const SRAQDetails = () => {
  return (
    <div>
      <div className="card-container">
        {cardDetails.map((card) => (
          <Link to={'/soil'} key={card.id} className="card">
            <img src={soil} alt="Sample" className="card-image" /> {/* Wrap Link around the entire card */}
            <h2>{card.title}</h2>
            <Button variant="contained">View</Button>
          </Link>
        ))}
      </div>
      {/* Text card below project cards */}
      <Grid item xs={12} className="text-container">
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          <h1>Predictions</h1>
          <br></br>Certainly! For the given dataset, a decision tree algorithm creates a tree-like structure using CO2, Temperature, and Relative Humidity as input features, predicting an outcome.<br></br>
          Mathematical representation:<br></br>
          Given a new set of feature values (CO2 = 22, Temperature = 24, Relative Humidity = 650), <br></br>the prediction for the target variable (e.g., AQI) Traversing the tree, <br></br>the input values move through nodes based on conditions (e.g., if CO2 is less than 23, if Temperature is greater than 23, etc.) <br></br>until reaching a leaf node Simple steps<br></br> if CO2 less than 23: <br></br>if Temperature greater than 23: <br></br>Predicted AQI: 40 <br></br>else: Predicted AQI: 35 <br></br>else: if Relative Humidity greater than 650: Predicted AQI: 45 <br></br>else: Predicted AQI: 38<br></br>
        </Typography>
      </Grid>
    </div>
  );
};

export default SRAQDetails;
