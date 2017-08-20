import React from 'react';
import ReactDOM from 'react-dom';
import config from '../environment.config';

const API_KEY = config.API_KEY;
console.log(API_KEY);
const App = (props) => {
  return <div>Hello!</div>;
};

ReactDOM.render(<App/>, document.querySelector('#container'));
