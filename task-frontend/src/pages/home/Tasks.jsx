import { useState } from "react";
import { Task } from "./Task";
import { CreateTask } from "./CreateTask";

export function Tasks({tasks , loadTasksData}){

  const[isOpen , setIsOpen] = useState(false);
  const closeCreateTask = ()=> {
    setIsOpen(false);
  }

  return (
    <div className="tasks">
      <div className="tasks-title">
         <h2>My Tasks</h2>
      </div>

    <div className="tasks-container">
    {tasks.map((task) => {

      return (
        <Task key={task.id} task={task} loadTasksData={loadTasksData}></Task>
      );
    })}
    </div>

    <div className="tasks-create">
      <button onClick={() => {
        setIsOpen(true);
      }}>
        Create Task
      </button>
    </div>

    <CreateTask isOpen={isOpen} onClose={closeCreateTask} loadTasksData={loadTasksData}>Content</CreateTask>

    </div>
  );
}