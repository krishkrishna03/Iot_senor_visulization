// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AQDetails from './Components/AQDetails';
import SRAQDetails from './Components/SRAQDetails';
import WMWDDetails from './Components/WMWDDetails';
import air from './Components/air';
import soil from './Components/soil';
import water from './Components/water'
function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cardpage/1" component={AQDetails} />
          <Route path="/cardpage/2" component={SRAQDetails} />
          <Route path="/cardpage/3" component={WMWDDetails} />
          <Route path="/air" component={air} />
          <Route path="/soil" component={soil} />
          <Route path="/water" component={water} />
        </Switch>
        
      </React.Fragment>
      
    </Router>
  );
}

export default App;
