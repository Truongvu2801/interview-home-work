import React, { Component } from "react";
import { Input } from 'antd';
import {connect} from 'react-redux';
import * as blogsActions from "./../../actions/blog";

class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchSring: ''
    }
  }

  onSearch(value) {
    this.props.searchPost(value);
  }

  onChange(event) {
    this.props.searchPost(event.target.value);
  }

  render() {
    const { Search } = Input;
    return (
      <div style={{marginTop:10}}>
        <Search
          placeholder="input search text"
          onSearch={value => this.onSearch(value)}
          style={{width: 300 }}
          onChange={event => this.onChange(event)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchPost: (searchStr) => {
      dispatch(blogsActions.searchPost(searchStr))
    }
  }
}
export default connect(null, mapDispatchToProps)(SearchBox);
