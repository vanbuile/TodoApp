import React, { useState } from 'react';
import TodoInput from '../TodoInput/TodoInput'
import TodoList from '../TodoList/TodoList'
const TodoWrapper = () => {
    const [todo, SetTodo] = useState('');
    const [todos, SetTodos] = useState([]);

const handleChange = (e) => {
   
    SetTodo(e.target.value);
    
}
const handleSubmit = () =>{
    todo && SetTodos(prev => [...prev, todo]);
    SetTodo('');
    
};
const handleClose = (todoName) =>{
    SetTodos(prev =>prev.filter(element=> element !== todoName));
    
};
const handleUpdate = (edit, value) =>{
    SetTodos(prev => prev.map(item =>item === edit ? value : item))
}
  return (
    <div className='TodoWrapper'>
      <h1>What should we do to day ?</h1>
      <TodoInput inputOnChange = {handleChange} inputOnSubmit = {handleSubmit} todoValue = {todo} edit = {null}/>
      <TodoList listOnClose = {handleClose} listOnUpdate = {handleUpdate} todos = {todos}/> 
    </div>
  )
}

export default TodoWrapper
