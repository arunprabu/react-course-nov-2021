import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// Step 16: let's get the state data from the store and convert them into read-only props. 
// Redux's core purpose is to get rid of state across the app and make it props. 
// Step 16.1
import { connect } from 'react-redux';
import { getPostList } from '../services/postService';

class PostList extends Component {

  componentDidMount(){
    // when the comp is coming into view, this will be called 
    // ideal place for your ajax calls
    this.props.dispatch(getPostList());
  }

  render() {
    let postList = this.props.postList;
    console.log(postList);

    let posts;
    if(postList && postList.length > 0){
       posts = postList.map( (post, index) => {
        return(
          <div className="list-group-item list-group-item-action text-start" key={index}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </h5>
              <small>Post Id: {post.id}</small>
            </div>
            <p className="mb-1 text-left">{post.body}</p>
          </div>
        )
      });
    }
    
    
    return (
      <div>
        <h3>Post List</h3>
        <div className="list-group text-left">

          { postList && postList.length > 0 ? 
            posts
            :
            <div className='alert alert-warning'>
              Post Not Found! You can add one.
            </div>            
          }
          
        </div>
      </div>
    )
  }
}

// 16.2 mapStateToProps() function should be defined in the same file before the export
const mapStateToProps = (state) => {
  console.log(state); // entire store 
  // We will convert the state into props 
  return {
    postList: state.postList // postList from store is now converted into props
  }
}

/* The above function will convert state to props for the PostList component.
By doing the above this comp should no longer have state. */
// 16.3 pass the mapStateToProps to connect method to subscribe to store data
export default connect(mapStateToProps)(PostList);