import React, { Component } from 'react'
import PostList from './posts/PostList'
import PostData from './data/posts.json'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <PostList />
      </div>

    )
  }
}

export default App
