import React,{Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
        <div className="search-bar">
          <input type="text" onChange={(e) => this.props.handleSearchTermChange(e.target.value)}/>
        </div>
      );
  }
}
