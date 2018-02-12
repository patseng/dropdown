import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/react-toolbox/theme.css'
import theme from './assets/react-toolbox/theme.js'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Dropdown from 'react-toolbox/lib/dropdown';

import './App.css';


const countries = [
  { value: 'EN-gb', label: 'England' },
  { value: 'ES-es', label: 'Spain'},
  { value: 'TH-th', label: 'Thailand' },
  { value: 'EN-en', label: 'USA'}
];

class App extends Component {
  state = { value: 'ES-es' };

  handleChange = (value) => {
    this.setState({value: value});
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Dropdown
            auto
            onChange={this.handleChange}
            source={countries}
            value={this.state.value}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
