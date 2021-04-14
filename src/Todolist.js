import React from 'react'
import Todoitem from './Todoitem'
import { useSelector } from "react-redux";

const Todolist = () => {
    const todos = useSelector(state => state)
    return (
        <div className="my-3">
              {todos.map(todo=>{
                 return <Todoitem key={todo.id} todo={todo}/>
             })} 
             
        </div>
    )
}

export default Todolist
