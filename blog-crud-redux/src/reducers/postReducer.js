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

// this is individual reducer / feature-wise reducer
const postReducer = (state = [], action) => {

  // Step 8: Let's work around action types with switch case 
  console.log(action); // it is an obj. this can have type and an optional payload
  //What are Actions? 
    //Actions are plain Javascript objects with a type property. 
    //This type property describes the event that is taking place in the application.

  // Will have switch case statements later.
  switch(action.type){
    case ADD_POST: 
      console.log('Before updating the store');
      let addPostState = [
        ...state, // spread operator
        action.payload
      ];
      return addPostState;

    case GET_POSTS:
      return action.payload;
      
    default: 
      return state;
  }

  // reducer should mandatorily return a state.  
}
export default postReducer;




