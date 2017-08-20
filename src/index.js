import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import config from '../environment.config';

const API_KEY = config.API_KEY;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({ videos: data });
    });
  }

  render() {
    return (
      <div className='app-wrapper'>
        <SearchBar/>
      </div>
    );
  };
};

ReactDOM.render(<App/>, document.querySelector('#container'));
