import React, { Component } from 'react';  
import './App.css';  

import FriendsList from './Components/FriendsList';

class App extends Component {  
  render() {
    return (
      <div className="container">
        <h3>New Friend</h3>
       
        <br />
        <FriendsList/>
      </div>
    );
  }
}



export default App; 