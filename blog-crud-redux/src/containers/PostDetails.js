import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, getPostById } from '../services/postService';

class PostDetails extends Component {

  componentDidMount(){
    // Let's hit the service method to get one post details
    // Read URL Param in React
    // console.log(this.props.params);

    this.props.dispatch( getPostById( 1 )); // TODO for ARUN
  }

  handleDeletePost = () => {
    this.props.dispatch(deletePost(this.props.post.id));
  }

  render() {

    return (
      <div className='container'>
        <h1>Post Details</h1>

          { Object.keys(this.props.post).length > 0?
            <div className='text-start'>
              <div className="list-group">
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{this.props.post.title}</h5>
                    <small>Post Id: {this.props.post.id}</small>
                  </div>
                  <p className="mb-1">
                    {this.props.post.body}
                  </p>
                  <br />
                  <button className='btn btn-primary' 
                  data-bs-toggle="modal" data-bs-target="#editModal">Edit</button> &nbsp;
                  <button className='btn btn-danger' onClick={this.handleDeletePost}>Delete</button>
                </div>
              </div>
              
              <div className="modal fade" id="editModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Update Post
                          </h5>
                        <button type="button" className="btn-close" 
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <input required type="text"
                          placeholder="Enter Post Title"
                          className='form-control'
                        /><br />
                        <textarea required rows="5" cols="28"
                          placeholder="Enter Post"
                          className='form-control'
                        /><br />
                        <button className='btn btn-primary' type='submit'>Save Changes</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          :
            <div className='alert alert-success'>
              Deleted Successfully! <br />
              You can go to <Link to='/posts'>Posts</Link> page!!
            </div>
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.postList);
  return {
    // syntax 
    // propName: what property we want from store 
    post: state.postList // this is an obj
  }
}

export default connect(mapStateToProps)(PostDetails);