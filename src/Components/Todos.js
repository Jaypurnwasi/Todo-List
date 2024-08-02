import React, { useState } from 'react'
import Todo from './Todo';
import toast from 'react-hot-toast';
const Todos = (props) => {

    let todoData = props.todoData;
    let setTodoData = props.setTodoData
    const [todoText,setTodoText] = useState("")
    const [query,setQuery] = useState('')
    const [showInput,setShowInput] = useState(false)

    function handleChange(e){
        setTodoText(e.target.value)
        console.log(todoText)

    }
    function handleQueryChange(e){
        setQuery(e.target.value)
        console.log(query)

    }

    function addTodo(e){

        if(!todoText)
            return

        const newTodo = {
            completed:false,
            task:todoText,
            id:Date.now()
           
        }
        setTodoData((prev)=>{
            return[
                ...prev,
                newTodo
            ]
        })
        
        setTodoText("")
        console.log("new todo added")
        // console.log(todoData)

        toast.success("Todo created succesfully")


        

    }
    function deleteTodo(tid){

        const updatedTodos = todoData.filter((todo)=>{
            return tid !== todo.id
        })
        setTodoData(updatedTodos)
        console.log("after deletion ")
        console.log(todoData)

        toast.error("Todo deleted")

    }

    function markComplete(id){

        const updatedTodos = todoData.map((todo)=>{
            return todo.id === id ?{ ...todo, completed: !todo.completed } : todo
        })

        setTodoData(updatedTodos)
        console.log("after checked")
        console.log(todoData)



    }



  return (
    <div className='todo-container'>
        
        <div className='search-box'>
            <input className='search input' name='search' placeholder='Search Todo' onChange={handleQueryChange}/>
            <button className='new-task-button' onClick={()=>{
                setShowInput(!showInput)
            }}> Enter new Task</button>
        </div>
        <div className={`input-container ${showInput?'visible' : 'hidden' }`}>
            <input type='text' className='input' placeholder='Enter your task' name='input' value={todoText} onChange={handleChange} />
            <button onClick={addTodo} className='button'>Add </button>
        </div>
        

        <div className='all-todos'>
        {
            todoData.filter((todo)=>{
                return todo.task.toLowerCase().includes(query.toLowerCase())
            }).map((todo,index)=>{

                return <Todo todo={todo} key={index} index = {index} deleteTodo = {deleteTodo} markComplete = {markComplete} ></Todo>
            })
        }
        </div>

    </div>

  )
}

export default Todos
