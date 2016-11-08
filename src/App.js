import React, { Component } from 'react';
import logo from './logo.svg';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2># Devstaff meetup - React.js #</h2>
        </div>

        <Profile />
      </div>
    );
  }
}

export default App;
