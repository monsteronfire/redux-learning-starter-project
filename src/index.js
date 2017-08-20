import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import config from '../environment.config';

const API_KEY = config.API_KEY;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };

    YTSearch({key: API_KEY, term: 'brush lettering'}, (data) => {
      this.setState({ videos: data });
    });
  }

  render() {
    return (
      <div className='app-wrapper'>
        <SearchBar/>
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  };
};

ReactDOM.render(<App/>, document.querySelector('#container'));
