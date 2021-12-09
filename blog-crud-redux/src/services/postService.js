// Step 12: 

/* We need the following info 
What's the Data?
  blogPostData in PostForm.js 

What's the REST API URL?
  https://jsonplaceholder.typicode.com/posts/

What's the HTTP Method? 
  POST 

What's the REST API client? 
  axios (Recommended) / fetch (ES2017)
*/ 

import axios from 'axios';
import { ADD_POST, DELETE_POST, GET_POSTS, GET_POST_BY_ID } from "../actions/types";

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Creating a Blog Post
export const createPost = (formData) => {
  console.log(formData);
  return (dispatch) => {  
    // dispatch method should be here -- so that we can dispatch an action with type and res/err

    return axios.post(POSTS_API_URL, formData)
      .then( (res) => { // upon success
        console.log(res);
        // this is ideal place for us to dispatch an action with type and successful res as payload    
        dispatch( {
          type: ADD_POST,
          payload: res.data 
        });

        alert( 'Created Successfully!');
        // TODO: Intergrate bootstrap toaster or else react-redux-toastr 
      })
      .catch( (err) => { // in case of error 
        console.log(err);
        // this is ideal place for us to dispatch an action with type and error res as payload
      })
      .finally( () => { // be it success or error -- this would be called at last
        console.log('It is over');
      });
  }
}

// Get Blog Posts 
export const getPostList = () => {
  return (dispatch) => {  
    // dispatch method should be here -- so that we can dispatch an action with type and res/err

    return axios.get(POSTS_API_URL)
      .then( (res) => { // upon success
        console.log(res);
        // this is ideal place for us to dispatch an action with type and successful res as payload    
        dispatch( {
          type: GET_POSTS,
          payload: res.data 
        });
      })
      .catch( (err) => { // in case of error 
        console.log(err);
        // this is ideal place for us to dispatch an action with type and error res as payload
      })
      .finally( () => { // be it success or error -- this would be called at last
        console.log('It is over');
      });
  }
} 

// Get Blog Post Details
export const getPostById = (id) => {

  console.log(id);

  return (dispatch) => {  
    // dispatch method should be here -- so that we can dispatch an action with type and res/err

    return axios.get(POSTS_API_URL+ '/' + id)
      .then( (res) => { // upon success
        console.log(res);
        // this is ideal place for us to dispatch an action with type and successful res as payload    
        dispatch( {
          type: GET_POST_BY_ID,
          payload: res.data 
        });
      })
      .catch( (err) => { // in case of error 
        console.log(err);
        // this is ideal place for us to dispatch an action with type and error res as payload
      })
      .finally( () => { // be it success or error -- this would be called at last
        console.log('It is over');
      });
  }

}

// Delete Post 
export const deletePost = (id) => {

  console.log(id);

  return (dispatch) => {  
    // dispatch method should be here -- so that we can dispatch an action with type and res/err

    return axios.delete(POSTS_API_URL+ '/' + id)
      .then( (res) => { // upon success
        console.log(res);
        // this is ideal place for us to dispatch an action with type and successful res as payload    
        dispatch( {
          type: DELETE_POST,
          payload: res.data
        });
      })
      .catch( (err) => { // in case of error 
        console.log(err);
        // this is ideal place for us to dispatch an action with type and error res as payload
      })
      .finally( () => { // be it success or error -- this would be called at last
        console.log('It is over');
      });
  }

}
