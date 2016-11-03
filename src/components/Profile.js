import React, { Component, PropTypes } from 'react';
import Stats from './Stats';
import ProfileInfo from './ProfileInfo';

class Profile extends Component {
  render() {
    const profile = this.props.profile;

    return (
      <div className="profile">
        <ProfileInfo profile={profile} />
        <Stats
          followers={profile.stats.followers}
          repos={profile.stats.repos}
          following={profile.stats.following}
        />
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object,
}

export default Profile;
