import React from 'react';
import { Component } from 'react';
import SearchBar from './SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const YOUTUBE_API_KEY = "AIzaSyC4ctA3xi1sS3P4IhWCyQhiYZouE-fObKg"

export default class App extends Component {

  constructor(props){
    super(props)

    this.state={
      videos : [],
      selectedVideo:null
    }

  }

  componentWillMount(){
    this.videoSearch('')
  }

  videoSearch(term){
    YTSearch({key:YOUTUBE_API_KEY,term:term},(videos) => {
      console.log(videos)
      this.setState({
        videos,
        selectedVideo:videos[0]
      })
    });
  }

  render() {
    return (
      <div>
        <SearchBar handleSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    );
  }
}
