import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'; // Import Button from Material-UI
import { Grid, Typography } from '@mui/material'; // Import Grid and Typography from Material-UI
import '../Styles/WMWDDetails.css';
import water from './water.jpg'
const cardDetails = [
  { id: 1, title: 'Node -- WM-WD-VN01-00' },
  { id: 2, title: 'Node -- WM-WD-PH02-00' },
  { id: 3, title: 'Node -- WM-WD-VN00-00' },
  { id: 4, title: 'Node -- WM-WD-PH01-00' },
  { id: 5, title: 'Node --  WM-WD-PH03-00' },
];

const WMWDDetails = () => {
  return (
    <div>
      <div className="card-container">
        {cardDetails.map((card) => (
          <div className="card" key={card.id}>
            <img src={water} alt="Sample" className="card-image" /> 
            <h2>{card.title}</h2>
            <Link to={'/water'}>
              <Button variant="contained">View</Button>
            </Link>
          </div>
        ))}
      </div>

      {/* Text card below project cards */}
      <Grid item xs={12} className="text-container">
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          <h1>Predictions</h1>
          <br></br>This dataset records water parameters like <b>temperature, TDS voltage, and TDS values (both uncompensated and compensated) from various locations or devices at different timestamp.</b><br></br>
By prediction these water pollution go through with machine learning algorithms<br></br>
Certainly! <b>In logistic regression, we use the logistic function to model the probability of an instance belonging to a specific class</b><br></br>
Assuming we have trained coefficients (hypothetical values for demonstration) from logistic regression<br></br>
β0 =−2.1<br></br>
β 1=0.5<br></br>
β 2=1.3<br></br>
where beta0 and beta1 are hypothetical values for demonstration
And given a new set of data:<br></br>
Temperature = 25.81<br></br>
TDS Voltage = 0.090073<br></br>
<b>By calculating this using logistic regression we obtain a probability of instance</b>
        </Typography>
      </Grid>
    </div>
  );
};

export default WMWDDetails;
