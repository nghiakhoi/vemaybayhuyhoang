import React, { Component } from 'react';
import '../css/App.css';
import MenuMobile from './MenuMobile';
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
