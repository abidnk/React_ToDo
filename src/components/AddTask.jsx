import React, { useState } from 'react';
import "./ToDo.css";

const AddTask = ({addTask}) => {
    const [value,setValue]=useState("");

    const addItem = () =>{
       addTask(value)
       setValue("");
    };
     
  return (
    <div>
        <div className='input-container'>
            <input type='text'
            className='input'
            placeholder='Add a New Task'
            value={value}
            onChange={(e)=>{
                setValue(e.target.value);
            }}
            />
            <button onClick={addItem} className='add-btn'>
                ADD
                </button>
        </div>

    </div>
  )
}

export default AddTask