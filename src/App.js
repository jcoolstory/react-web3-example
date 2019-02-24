import React, { Component } from 'react';
import logo from './logo.svg';
import MainPage from "./MainPage.js";
import { Config } from "./utils/webhelper";
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    Config();
  }
  render() {
    return (<MainPage />);
  }
}

export default App;
