import React, { Component, PropTypes } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.input.value);
    this.input.value = '';
  }

  render() {
    return (
      <div className="search-box">
        <form>
          <input ref={c => (this.input = c)} type="search" placeholder="Username" />
          <button onClick={this.onSubmit}>Search</button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;