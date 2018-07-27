import React, { Component } from 'react';
import '../css/App.css';
import Content from './Content';
import MenuMobile from './MenuMobile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuMobile />
        <Content />
      </div>
    );
  }
}

export default App;
