import binLogo from '../../assets/bin-logo.png'
import editLogo from '../../assets/edit-logo.png'
import axios from 'axios'
import { UpdateTask } from './UpdateTask'
import { useState } from 'react'
import { toast } from 'react-toastify';

export function Task({task , loadTasksData}){

    const statusClass = task.status === "COMPLETE" ? "task-completed" : "task-open";

  const[isOpen , setIsOpen] = useState(false);
    const closeCreateTask = ()=> {
      setIsOpen(false);
    }

  const deleteTask = async ()=> {
    await axios.delete(`http://localhost:8080/api/v1/tasks/${task.id}`);
    toast.success("Task deleted!");
    await loadTasksData();
  }


  return (
    <div className={statusClass}>
    <div className="task">
      <div className="task-details">
        <div className="task-details-text">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>

        <div className="task-details-status">
          <p>Priority: {task.priority} </p>
          <p>Due Date: {task.dueDate} </p>
        </div>
      
      </div>

      <div className="task-edit">
        <button onClick={() => {
          setIsOpen(true);
        }}>
          <img src={editLogo}></img>
        </button>
      </div>

      <div className="task-delete">
        <button onClick={deleteTask}>
          <img src={binLogo}></img>
        </button>
      </div>

      <UpdateTask isOpen={isOpen} onClose={closeCreateTask} loadTasksData={loadTasksData} task={task}>Content</UpdateTask>
      

    </div>
    </div>
  );
}