import React, { Component } from 'react';
import Button from "./components/Button"
import Web3 from 'web3';

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blockNumber : 0
        }
    }
  render() {
   return (
       <div>
       <h1>hello</h1>
       <p><label>block number : { this.state.blockNumber } </label></p>
        <Button name='get Block'/>
       </div>
    );
  }
}

export default MainPage;
