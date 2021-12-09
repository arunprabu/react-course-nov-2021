// Step 3: Setup Reducer for the store
/* What's a Reducer?
  It is a function that takes the current state and an action. 
  and returns the new state upon the action dispatched */

// Setting up postReducer so that
// we can combine this reducer with other reducers later 
// and make a big object for the store 
// reducer should mandatorily return a state. 

// Step 8 Continues... importing all feature related action to be later refered in switch case
import { ADD_POST, GET_POSTS, GET_POST_BY_ID, EDIT_POST, DELETE_POST } from '../actions/types';


// initialState for Posts Feature
const initialState = {
  loading: false,
  error: undefined,
  status: undefined,
  postList: [],
  post: {}
}

// this is individual reducer / feature-wise reducer
const postReducer = (state = initialState, action) => {

  // Step 8: Let's work around action types with switch case 
  console.log(action); // it is an obj. this can have type and an optional payload
  //What are Actions? 
    //Actions are plain Javascript objects with a type property. 
    //This type property describes the event that is taking place in the application.

  // Will have switch case statements later.
  switch(action.type){
    case ADD_POST: 
      console.log('Before updating the store');
      
      const addPostState = {
        ...state,
        postList: [
          ...state.postList,
          action.payload
        ]
      };

      return addPostState;

    case GET_POSTS:
      // insert action.payload into postList of state.
      // Why do we do like the following? 
      // https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns

      const postsState = {
        ...state, // spreading out all state props
        postList: action.payload
      }

      return postsState;

    case GET_POST_BY_ID:
      const postState = {
        ...state,
        post: action.payload
      }

      return postState;

    case EDIT_POST: 
      const updatedPostState = {
        ...state,
        post: action.payload
      }

      return updatedPostState;
      
    case DELETE_POST: 
    const deletedPostState = {
      ...state,
      post: action.payload
    }

    return deletedPostState;

    default: 
      return state;
  }

  // reducer should mandatorily return a state.  
}
export default postReducer;




