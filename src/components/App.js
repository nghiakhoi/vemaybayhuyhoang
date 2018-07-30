import React, { Component } from 'react';
import '../css/App.css';
import Content from './Content';
import MenuMobile from './MenuMobile';
import axios from 'axios';


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
        <Content />
      </div>
    );
  }
}

export default App;
