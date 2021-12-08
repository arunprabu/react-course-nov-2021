import React, { Component } from 'react';

// Step 10. We need to dispatch an action with type ADD_POST from handleCreatePost method.
// In order to get dispatch method, we need to use react-redux 
import { connect } from 'react-redux';
import { createPost } from '../services/postService';

import { ADD_POST } from "../actions/types";

class PostForm extends Component {

  // Step 9: Let's work on form submission flow. 
  handleCreatePost = (event) => {
    event.preventDefault();
    console.log(this.getTitle.value);
    console.log(this.getContent.value);

    // the following is the submittable form data
    const blogPostData = {
      title: this.getTitle.value,
      body: this.getContent.value
    } 
    console.log(blogPostData);
    console.log(this.props); // will have dispatch method

    this.props.dispatch( createPost(blogPostData) ); // this is the service method

    // Step 11: It is time to dispatch actions from form submission logic 
    // connect() helps props have dispatch method
    // using it we can dispatch action with type and data (payload)
    // this.props.dispatch({ 
    //                     type: ADD_POST,
    //                     payload: blogPostData
    //                   });

  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <h3>Create Post!</h3>
          <form className='text-left' onSubmit={this.handleCreatePost}>
            <input required type="text"
              placeholder="Enter Post Title"
              className='form-control' ref={(input) => this.getTitle = input }/><br /> 
              {/* Step 9.. using ref to read form data on submit */}
            <textarea required rows="5" cols="28"
              placeholder="Enter Post"
              className='form-control' ref={(input) => this.getContent = input} /><br />
            <button className='btn btn-primary' type='submit'>Add Post</button>
          </form>
        </div>
      </div>
    )
  }
}

// Step 10 continues... last line of the compoent should be the following. 
// after connecting props will be available in this component. 
export default connect()(PostForm);
