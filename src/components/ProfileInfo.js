import React, { Component, PropTypes } from 'react';

class ProfileInfo extends Component {
  render() {
    const profile = this.props.profile;

    return (
      <div className="profile-info">
        <a
          className="profile-avatar"
          href={profile.githubUrl}
          target="_blank"
          rel='noopener noreferrer'
          title={profile.username}
        >
          <img src={profile.imageUrl} alt={profile.username}/>
        </a>

        <div className="profile-details">
          <h2>
            <a
              href={profile.githubUrl}
              title={profile.username}
              target="_blank"
              rel='noopener noreferrer'
            >
              {profile.name}
            </a>
          </h2>
          <h3>{profile.location || 'Voriza, Crete'}</h3>
        </div>
      </div>
    );
  }
}

ProfileInfo.propTypes = {
  profile: PropTypes.shape({
    githubUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export default ProfileInfo;
