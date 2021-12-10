import React, { useReducer, useRef } from 'react'
import useFetch from '../../hooks/useFetch';
import todoReducer from '../../reducers/todoReducer';

const Todo = () => {

  // capturing the user input form the form fields in fn comp 
  const todoInputRef = useRef(null);

  // useReducer hook - will get reducer as param 
  const [todoState, todoDispatch ] = useReducer(todoReducer);

  const todosFromAPI = useFetch('https://jsonplaceholder.typicode.com/todos');
  console.log(todosFromAPI);

  console.log(todoState);

  const handleAddTodo = () => {
    console.log(todoInputRef.current.value);
    todoDispatch({
      type: 'ADD_TODO',
      payload: todoInputRef.current.value
    });
  }

  let todos = null;
  if(todoState && todoState.length > 0 ){
    todos = todoState.map( (todo, index) => {
      return(
      <li className="list-group-item" key={index}>
        {todo.text} 
        <button type="button" className="btn btn-sm btn-danger float-end">Delete</button>
        <button type="button" className="btn btn-sm btn-info float-end">Edit</button>
      </li>
      )
    });
  }

  return (
    <div>
      <h4>Todo | useRef() and useReducer() Demo</h4>
      <input type="text" className="form-control" ref={todoInputRef}/>
      <br />
      <button type="button" className="btn btn-success" onClick={handleAddTodo}>ADD TODO</button>

      <br /><br/>
      <p>List of Todos</p>
      <ul className="list-group">
        {todos}
      </ul>
    </div>
  )
}

export default Todo
