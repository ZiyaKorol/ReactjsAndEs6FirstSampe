import React,{Component} from 'react'

export default class VideoItem extends Component{
  constructor(props){
    super(props)
  }

  render(){

    let {video} = this.props
    const imageUrl = video.snippet.thumbnails.default.url
    const title = video.snippet.title

    return (
              <li onClick = {()=>this.props.onVideoSelect(video)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                      <img className="media-object" src={imageUrl}/>
                    </div>
                    <div className="media-body">
                      <div className="media-heading">
                        {title}
                      </div>
                    </div>
                </div>
              </li>
           )
  }
}
