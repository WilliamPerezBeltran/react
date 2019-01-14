import React, { Component } from 'react'

class PostDetail extends Component {
  constructor (props) {
    super(props)
    this.titleWasClicked = this.titleWasClicked.bind(this)
  }
  titleWasClicked (event) {
    event.preventDefault()
    alert('click')
    console.log(this.props)
    console.log(this.props.post.id)
    console.log(this.props.post.content)
    const { dataCallBack } = this.props
    console.log(dataCallBack)
    if (dataCallBack !== undefined) {
      dataCallBack('hello wordl', this.props)
    }
  }

  render () {
    const { post } = this.props
    // const { post } = this.props.post
    return (
      <div>
        <h1 onClick={this.titleWasClicked}>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    )
  }
}

export default PostDetail
