import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  addOne = () => {
    this.setState({ number: this.state.number + 1 });
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.number }</h1>
        <button onClick={ this.addOne }>Add One!</button>
      </div>
    );
  }
}

export default App;
