import React, { Component } from 'react';
import './Stats.css';

class Stats extends Component {
  render() {
    return (
      <div className="profile-stats">
        <ul>
            <li>
              <i>29</i><span>Followers</span>
            </li>
            <li>
              <i>15</i><span>Repositories</span>
            </li>
            <li>
              <i>16</i><span>Following</span>
            </li>
        </ul>
      </div>
    );
  }
}

export default Stats;