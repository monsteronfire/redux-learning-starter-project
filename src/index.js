import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import config from '../environment.config';

const API_KEY = config.API_KEY;

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <SearchBar/>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#container'));
