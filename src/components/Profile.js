import React, { Component } from 'react';
import Stats from './Stats';
import ProfileInfo from './ProfileInfo';

class Profile extends Component {
  render() {
    const profile = {
      githubUrl: 'https://github.com/devstaff-crete',
      username: 'devstaff-crete',
      imageUrl: 'https://avatars0.githubusercontent.com/u/13062423?v=3&s=200',
      name: 'Devstaff',
      location: 'Crete, Greece', 
    };
  
    return (
      <div className="profile">
        <ProfileInfo profile={profile} />
        <Stats followers={29} repos={15} following={16} />
      </div>
    );
  }
}

export default Profile;
