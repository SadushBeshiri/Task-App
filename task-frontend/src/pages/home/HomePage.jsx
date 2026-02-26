import { TaskInfo } from "./TaskInfo";
import { Tasks } from "./Tasks";

export function HomePage(){
  return (
    <div className="home-page">
      <p>this is home page</p>
      <TaskInfo />
      <Tasks />
    </div>
  );
}