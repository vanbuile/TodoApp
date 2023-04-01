import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = (props) => {
  return (
    <div className='TodoList'>
      {props.todos.map((todo, index) => 
        <TodoItem id = {index} key = {index} todoName = {todo} itemOnClose = {props.listOnClose} itemOnUpdate ={props.listOnUpdate}/>
      )}
    </div>
  )
}

export default TodoList
