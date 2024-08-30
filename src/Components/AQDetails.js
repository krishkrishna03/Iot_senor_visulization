import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import airp from '../Data/airpol.jpeg';
import '../Styles/Home.css';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Node--AQ-MG00-00' },
  ];

  return (
    <Grid className="fullcontainer" container spacing={3} id="projects">
      {projects.map((project) => (
        <Grid key={project.id} item xs={12} sm={6} md={4} lg={3} style={{ paddingTop: '100px' }}>
          <div className="cardpadding">
            <div className="card">
              <img src={airp} alt="Sample" className="card-image" />
              <div className="card-details">
                <h3>{project.title}</h3>
                <div className="buttongroup">
                  {/* Make sure '/air' is the correct route */}
                  <Link to={'/air'}>
                    <Button variant="contained">View</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      ))}

      {/* Text card below project cards */}
      <Grid item xs={12} className="text-container">
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          <h1>Predictions</h1>
          The dataset provided contains detailed records from an air quality monitoring system. For{' '}
          <b>predicting air quality using this dataset, using a machine learning algorithm like linear regression.</b>
          <br></br> Given the dataset with columns such as PM2.5, PM10, temperature, humidity, etc. <br></br>
          The prediction value (y^) of the dependent variable{' '}
          <b>(e.g., AQI - Air Quality Index) is calculated using the linear regression equation</b>
          <br></br>
          ŷ X1 = ao + a1 × x1 + A2 × X2 + A3 × X3 + ··· + an × Xn<br></br>
          AQI = 10 + 2 × PM2.5 + 3 × PM10 + 1.5 × Temperature - 0.5 x<br></br> Relative Humidity<br></br>
          Let's use this equation and calculate the predicted AQI for a sample set of independent variables:<br></br>
          PM2.5 = 9.2 • PM10 = 24.4<br></br>
          • Temperature = 27.9<br></br>
          * Relative Humidity = 66.59<br></br>
          Using these values in the equation:<br></br>
          AQI = 10 + 2 × 9.2 + 3 × 24.4 + 1.5 × 27.9 − 0.5 × 66.59<br></br>
          Calculating this:<br></br>
          AQI = 10 + 18.4 + 73.2 + 41.85 - 33.295<br></br>
          <b>AQI = 10 + 18.4 + 73.2 + 41.85 - 33.295 = 110.15</b><br></br>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Projects;
