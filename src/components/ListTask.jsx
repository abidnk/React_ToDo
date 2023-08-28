import React from 'react'
import "./ToDo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ListTask = ({task, index, removeTask }) => {
  return (
    <div>
        <div className='list-task'>
        {task.title}
            <button 
            onClick={()=>{removeTask(index)}} 
            className='delete-btn'>
               <FontAwesomeIcon icon={faTrash} />
               </button>
        </div>
    </div>
  )
}

export default ListTask