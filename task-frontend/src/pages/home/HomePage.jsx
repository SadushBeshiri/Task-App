import { TaskInfo } from "./TaskInfo";
import { Tasks } from "./Tasks";

import './Homepage.css'

export function HomePage(){
  return (
    <div className="home-page">
      <TaskInfo />
      <Tasks />
    </div>
  );
}