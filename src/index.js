import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

import config from '../environment.config';

const API_KEY = config.API_KEY;

YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
  console.log(data);
});

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <SearchBar/>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#container'));
