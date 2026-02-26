import { Task } from "./Task";

export function Tasks(){
  return (
    <div className="tasks">
      <div className="tasks-title">
         <h2>My Tasks</h2>
      </div>
      <Task></Task>
      <Task></Task>
    </div>
  );
}