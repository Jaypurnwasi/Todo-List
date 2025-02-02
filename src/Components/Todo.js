import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";

const Todo = (props) => {
    const todo = props.todo
    const deleteTodo = props.deleteTodo
    const markComplete = props.markComplete
   
  return (
    <div className='todo'>
        <div className='todo-text'>
            {todo.task}
        </div>
        <div className='todo-icons'>
            <FaCheckCircle className={`check-icon ${todo.completed? 'checked':'unchecked'}`} onClick={()=>{
              markComplete(todo.id)
            }} title='Mark as Complete' />
            <RiDeleteBin5Line onClick={()=>{
              deleteTodo(todo.id)
            }} className='delete-icon'></RiDeleteBin5Line>
        </div>  
    </div>
  )
}

export default Todo
