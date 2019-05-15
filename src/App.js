import React, { Component } from 'react';  
import './App.css';  
import Form from "./Components/Form";
import FriendsList from './Components/FriendsList';

class App extends Component {  
  render() {
    return (
      <div className="container">
        <h3>New Friend</h3>
        <Form />
        <br />
        <FriendsList/>
      </div>
    );
  }
}

export default App; 