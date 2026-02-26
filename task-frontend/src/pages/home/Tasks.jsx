import { Task } from "./Task";

export function Tasks(){
  return (
    <div className="tasks">
      <div className="tasks-title">
         <h2>My Tasks</h2>
      </div>

    <div className="tasks-container">
      <Task></Task>
      <Task></Task>
      
    </div>

    <div className="tasks-create">
      <button>Create Task</button>
    </div>

      

    </div>
  );
}