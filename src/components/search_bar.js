import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className='search-bar-wrapper'>
        <input
          value={this.state.term}
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
};

export default SearchBar;
