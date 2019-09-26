import React, { Component } from 'react';
import './App.css';
import Info from "./info.js"

class Spot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 59.955413,
            lon: 30.337844
        };
    }

    showInfo(){
        this.refs.child.open();
    }
 
  render() {
    return (
        <div>
            <Info ref="child"/>
            <span class="dot" onClick={this.showInfo.bind(this)}></span>
        </div>
    );
  }
}
 
export default Spot;
