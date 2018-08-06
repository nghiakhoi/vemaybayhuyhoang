import React, { Component } from 'react';
import '../css/App.css';
import Home from './Home';
import MenuMobile from './MenuMobile';
import axios from 'axios';
import Booking from './Booking';
import DieuHuongURL from '../router/DieuHuongURL';

class App extends Component {


  render() {
    return (
      <div className="App">
        <MenuMobile />
        <DieuHuongURL />
      </div>
    );
  }
}

export default App;
