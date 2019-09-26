import React, { Component } from 'react';
import './App.css';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vis: "hidden"
        };
    }

    open(){
        if(this.state.vis == "hidden"){
            this.setState({vis: "visible"})
        } else{
            this.setState({vis: "hidden"})
        }
        
    }
 
  render() {
    return (
        <div style={{visibility: this.state.vis, backgroundColor: '#282c34', width: '100px'}}>
            <h1>find me</h1>
            <img src="http://1.bp.blogspot.com/-PGGqcwZkPq4/UHgHavcpy9I/AAAAAAAABU8/NCeVQT7PgMo/s640/bikeinatree.jpg"
                style={{width: '100px'}}
            ></img>
        
           </div>
    );
  }
}
 
export default Info;
