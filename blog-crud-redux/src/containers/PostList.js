import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PostList extends Component {
  render() {
    return (
      <div>
        <h3>Post List</h3>
        <div className="list-group text-left">

          <div className="list-group-item list-group-item-action text-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                <Link to={`/posts/1`}>Test Post 1</Link>
              </h5>
              <small>Post Id: 1</small>
            </div>
            <p className="mb-1 text-left">
              Random post details
            </p>
          </div>

          <div className='alert alert-warning'>
            Post Not Found! You can add one.
          </div>

        </div>
      </div>
    )
  }
}

export default PostList;