import React,{Component} from 'react'
import VideoItem from '../VideoListItem'

export default class VideoList extends Component{
  constructor(props){
    super(props)
  }

  render(){

    let{videos} = this.props

    return(
          <ul className="col-md-4 list-group">
              {videos.map((video)=>{
                return <VideoItem onVideoSelect = {this.props.onVideoSelect} key={video.etag} video={video} />
              })}
          </ul> )
  }
}
