import blueCalendarLogo from '../../assets/blue-calendar-logo.png'
import darkblueCalendarLogo from '../../assets/dark-blue-calendar-logo.png'
import checkmarkLogo from '../../assets/checkmark-logo.png'
import inboxLogo from '../../assets/inbox-logo.png'
import { findCompletedTasksNr } from '../../utils/findCompletedTasksNr';
import { findTodayTasksNr } from '../../utils/findTodayTasksNr';


export function TaskInfo ({tasks}){

  return (
    <div className="task-info">
      <div className="task-info-title">
        <h2>Task App</h2>
      </div>
      <div className="task-info-container">
        <div className="task-info-container-today">
          <img src={blueCalendarLogo}></img>
          <p>{findTodayTasksNr(tasks)}</p>
          <p>Today</p>
        </div>
        <div className="task-info-scheduled">
          <img src={darkblueCalendarLogo}></img>
          <p>{tasks.length - findTodayTasksNr(tasks)}</p>
          <p>Scheduled</p>
        </div>
        <div className="task-info-container-all">
          <img src={inboxLogo}></img>
          <p>{tasks.length}</p>
          <p>All</p>
        </div>
        <div className="task-info-container-completed">
          <img src={checkmarkLogo}></img>
          <p>{findCompletedTasksNr(tasks)}</p>
          <p>Completed</p>
        </div>
      </div>
    </div>
  );
}