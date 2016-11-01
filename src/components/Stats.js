import React, { Component, PropTypes } from 'react';

class Stats extends Component {
  render() {
    return (
      <div className="profile-stats">
        <ul>
            <li>
              <i>{this.props.followers}</i><span>Followers</span>
            </li>
            <li>
              <i>{this.props.repos}</i><span>Repositories</span>
            </li>
            <li>
              <i>{this.props.following}</i><span>Following</span>
            </li>
        </ul>
      </div>
    );
  }
}

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  repos: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
};

export default Stats;
