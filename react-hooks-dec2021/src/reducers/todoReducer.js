// reducer will take in state, action with type and payload as params. 
// it will return state 

const todoReducer = (state = [], action) => {
  switch( action.type){
    case 'ADD_TODO':
      const addedTodoState = [
        ...state, 
        { 
          id: new Date(), 
          text: action.payload,
          completed: false
        }
      ];

      return addedTodoState;
    
    case 'GET_TODOS':  // learn about dispatching this action type form useEffect hook 
      return state;
    
    default: 
      return state;
  }
}

export default todoReducer;