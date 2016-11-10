import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import Stats from './Stats';

function createStats() {
  return (
    <Stats followers={1} repos={2} following={3} />
  );
}

describe('<Stats />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(createStats(), div);
  });

  it('will have the class "profile-stats"', () => {
    const stats = shallow(createStats());
    expect(stats.is('.profile-stats')).toBe(true);
  });

  it('will have as props stats for followers, repos and following', () => {
    const stats = shallow(createStats());

    expect(stats.instance().props.followers).toBe(1);
    expect(stats.instance().props.repos).toBe(2);
    expect(stats.instance().props.following).toBe(3);
  });

  it('will render all stats', () => {
    const stats = shallow(createStats());

    expect(stats.contains(<li><i>{1}</i><span>Followers</span></li>)).toBe(true);
    expect(stats.contains(<li><i>{2}</i><span>Repositories</span></li>)).toBe(true);
    expect(stats.contains(<li><i>{3}</i><span>Following</span></li>)).toBe(true);
  });
});
