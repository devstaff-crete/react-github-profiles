import React, { Component } from 'react';
import logo from './logo.svg';
import ProfileList from './components/ProfileList';
import 'whatwg-fetch';

function fetchGithubProfile(username) {
  let url = `https://api.github.com/users/${username}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => (
      {
        githubUrl: data.html_url,
        username: data.login,
        imageUrl: data.avatar_url,
        name: data.name,
        location: data.location,
        stats: {
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        }
      }
    ))
    .catch((error) => console.log('Github is down!'))
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
    }
  }

  componentDidMount() {
    fetchGithubProfile('devstaff-crete')
      .then(profile => this.setState({ profiles: [profile, ...this.state.profiles] }));
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
