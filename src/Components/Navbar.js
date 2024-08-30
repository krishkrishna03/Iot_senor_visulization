import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/Navbar.css';

const Navbar = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <div className="container-fluid text-center">
        <Link className="navbar-brand" to="/">
          <h3>IOT Sensor Data Analysis</h3>
          {/* Your brand content goes here */}
        </Link>
        <button className="btn btn-light" onClick={handleGoBack}>
          Back
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
