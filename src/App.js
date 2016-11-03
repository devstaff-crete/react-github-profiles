import React, { Component } from 'react';
import logo from './logo.svg';
import ProfileList from './components/ProfileList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [{
        githubUrl: 'https://github.com/devstaff-crete',
        username: 'devstaff-crete',
        imageUrl: 'https://avatars0.githubusercontent.com/u/13062423?v=3&s=200',
        name: 'Devstaff',
        location: 'Crete, Greece',
        stats: {
          followers: 29, repos: 15, following: 16
        }
      }, {
        githubUrl: 'https://github.com/gsaslis',
        username: 'gsaslis',
        imageUrl: 'https://avatars3.githubusercontent.com/u/2420882?v=3&s=466',
        name: 'Yorgos Saslis',
        location: 'Crete, Greece',
        stats: {
          followers: 13, repos: 31, following: 9
        }
      }]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2># Devstaff meetup - React.js #</h2>
        </div>
        <ProfileList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
