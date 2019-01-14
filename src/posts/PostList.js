import React, { Component } from 'react'
import PostData from '../data/posts.json'
import PostDetail from './PostDetail'
class PostList extends Component {
  constructor (props) {
    super(props)
    this.handleDataCallBack = this.handleDataCallBack.bind(this)
  }

  handleDataCallBack (txtMsg, data) {
    alert(txtMsg)

    console.log('get data')
    console.log(data)
    console.log('we are in inside of handleDataCallBack')
  }

  render () {
    return (
      <div>
        <h1>hello there</h1>
        {PostData.map((item, index) => {
          return <PostDetail
            post={item}
            key={`post-list-key ${index}`}
            dataCallBack={this.handleDataCallBack} />
        })}
      </div>
    )
  }
}

export default PostList
