import React from 'react'
import TodoInput from '../TodoInput/TodoInput'
import { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
const TodoItem = (props) => {
  const [edit, setEdit] = useState(null);

  const UpdateInternal  = (editId, value) =>{
    props.itemOnUpdate(editId, value);
    setEdit(null);
  }

  if(edit !== null) {
    
    return <TodoInput inputOnSubmit = {UpdateInternal} edit = {edit} todoValue = {props.todoName}/>
  }
  return (
    <div className='TodoItem'>
        <p>{props.todoName}</p>
      <div className = "mini-buttons">
        <button className ='mini-button mini-close-button' onClick = {()=>props.itemOnClose(props.todoName)}><RiCloseCircleLine/></button>
        <button className = 'mini-button mini-update-button' onClick = {()=>{setEdit(props.todoName)}}><TiEdit/></button>
      </div>
      
      
    </div>
  )
}

export default TodoItem
