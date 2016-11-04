import React, { Component } from 'react';
import logo from './logo.svg';
import ProfileList from './components/ProfileList';
import Search from './components/Search';
import 'whatwg-fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

function fetchGithubProfile(username) {
  let url = `https://api.github.com/users/${username}`;

  return fetch(url)
    .then(checkStatus)
    .then(parseJSON)
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
    ));
}

class App extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);

    this.state = {
      profiles: [],
    }
  }

  onSearch(username) {
    if (username) {
      fetchGithubProfile(username)
        .then(profile => this.setState({ profiles: [profile, ...this.state.profiles] }))
        .catch(error => console.log(`Something went wrong: ${error.message}`));
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

        <Search onSubmit={this.onSearch} />

        <ProfileList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
