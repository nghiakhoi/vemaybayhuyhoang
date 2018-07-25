import React, { Component } from 'react';
import '../css/App.css';
import Nav from './Nav';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Content />
      </div>
    );
  }
}

export default App;
