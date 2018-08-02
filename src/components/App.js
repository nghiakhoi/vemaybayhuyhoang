import React, { Component } from 'react';
import '../css/App.css';
import Home from './Home';
import MenuMobile from './MenuMobile';
import axios from 'axios';
import Booking from './Booking';


class App extends Component {
  render() {
    axios.get('http://localhost:4000/js')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  axios.get('http://localhost:4000/vj')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  axios.get('http://localhost:4000/vn')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    return (
      <div className="App">
        <MenuMobile />
        
        <Booking />
      </div>
    );
  }
}

export default App;
