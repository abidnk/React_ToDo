import React, { useState } from "react";
import "./ToDo.css";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

const ToDo = () => {
    const[tasks, setTasks] = useState([])
    const addTask = (title) => {
        const newTask = [...tasks,{title}]
        setTasks(newTask);
    }
    const removeTask = (index)=>{
       const newTask = [...tasks]
        newTask.splice(index,1);
        setTasks(newTask);
    }
  return (
    <>
    <div className="todo-container">
        <div className="header">TODO APP</div>
        <div className="add-task">
             <AddTask addTask = {addTask}/>
        </div>
       
        <div className="tasks">
            {tasks.map((task , index) =>(
                <ListTask task={task} removeTask={removeTask}
                index = {index}
                />

            ))}
            
            </div> 
    </div>
    </>
  )
}

export default ToDo