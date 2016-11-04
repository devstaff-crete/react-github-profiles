import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="search-box">
         <form>
          <input type="search" placeholder="Username"/>
          <button>Search</button>
         </form>
      </div>
    );
  }
}

export default Search;