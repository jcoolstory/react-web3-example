import React, { Component } from 'react';
import {Config} from "../utils/webhelper";
class Button extends Component {
    constructor(props) {
        super(props);
    }

    handleOnclick () {
        var web3 =  Config();
        
        console.log("click");
        console.log( web3.fromWei( web3.eth.getBalance('0xf3956Cf4D3C6848fEF69b927581727cEfaC03225').toString() ));
        // web3.eth.getBlockNumber((f)=>{
        //     console.log(f.toString());
        // })
        // web3.eth.getBlockNumber().then((f)=>{
        //     console.log(f)
        // });
    }

    render() {
        return (
            <button onClick= {this.handleOnclick} >{this.props.name}</button>
        )
    }
}

export default Button;