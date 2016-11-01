import React, { Component } from 'react';

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

export default Stats;
