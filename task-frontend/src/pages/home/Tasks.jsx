import { Task } from "./Task";

export function Tasks({tasks , loadTasksData}){
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
      <button>Create Task</button>
    </div>

      

    </div>
  );
}