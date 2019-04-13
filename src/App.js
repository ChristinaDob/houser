import React, { Component } from 'react';
// import { HashRouter } from 'react-router-dom';
import './App.css';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Wizard from './Components/Wizard/Wizard';
import Header from './Components/Header/Header';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
