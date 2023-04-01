import React, { useState } from 'react'

const TodoInput = (props) => {
  const [temp, SetTemp] = useState(props.todoValue); 
  const handleTempChange = (e) => {
    SetTemp(e.target.value)
  }  
  if(props.edit !== null){
    return(
    <div className='TodoInput'>
            <input className = 'TodoInput__input-update' value = {temp} type="text" placeholder='Update your job' onChange={handleTempChange}/>
            <button  className = 'TodoInput__button TodoInput__button-update' onClick={() => props.inputOnSubmit(props.edit, temp)}> Update </button>
    </div>
    )
  }
  
  return (
    
    <div className='TodoInput'>
            <input className = 'TodoInput__input-add'value= {props.todoValue} type="text" placeholder='Enter your job' onChange ={props.inputOnChange} />
            <button  className = 'TodoInput__button' onClick={props.inputOnSubmit}> Add </button>
    </div>
  )
}

export default TodoInput
