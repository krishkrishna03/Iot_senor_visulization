import React from 'react';
import { Grid, Button } from '@mui/material';
import '../Styles/Home.css';
import { Link } from 'react-router-dom';
import air from '../Data/air.jpg';
import water from '../Data/water.jpg';
import soil from '../Data/soil.jpg';

const Projects = () => {
  const projects = [
    {
            id: 1,
            title: 'AQ',
            image :air
            
            
          },
          {
            id: 2,
            title: 'SR-AQ',
            image: soil
            
           
          },
          {
            id: 3,
            title: 'WM-WD ',
            image: water
            

          },
 ];

  return (
    <Grid className='fullcontainer' container spacing={3} id="projects">
      {projects.map((project) => (
        <Grid key={project.id} item xs={12} sm={6} md={4} lg={3} style={{ paddingTop: '100px' }}>
          <div className="cardpadding">
            <div className="card">
              <img src={project.image} alt={project.title} className="card-image" />
              <div className="card-details">
                <h3>{project.title}</h3>
                <div className="buttongroup">
                  <Link to={`/cardpage/${project.id}`}>
                    <Button variant="contained">View</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;