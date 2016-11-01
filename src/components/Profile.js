import React, { Component } from 'react';
import Stats from './Stats';

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-info">
          <a className="profile-avatar" href='https://github.com/devstaff-crete' target="_blank" title='devstaff-crete'>
            <img src='https://avatars0.githubusercontent.com/u/13062423?v=3&s=200' alt='devstaff-crete'/>
          </a>
          <div className="profile-details">
            <h2><a href='https://github.com/devstaff-crete' title='devstaff-crete' target="_blank">Devstaff</a></h2>
            <h3>Crete, Greece</h3>
          </div>
        </div>
        <Stats />
      </div>
    );
  }
}

export default Profile;
