import { TaskInfo } from "./TaskInfo";
import { Tasks } from "./Tasks";
import './Homepage.css'

export function HomePage({tasks,loadTasksData}){
  return (
    <div className="home-page">
      <TaskInfo tasks={tasks}/>
      <Tasks tasks={tasks} loadTasksData={loadTasksData}/>
    </div>
  );
}