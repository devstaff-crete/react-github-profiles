import React, { Component, PropTypes } from 'react';
import Profile from './Profile';

class ProfileList extends Component {
  render() {
    return (
      <div className="profile-list">
        {
          this.props.profiles.map((profile) => (
            <Profile key={profile.username} profile={profile}/>    
          ))
        }
      </div>
    );
  }
} 

Profile.propTypes = {
  profiles: PropTypes.array,
};

export default ProfileList;