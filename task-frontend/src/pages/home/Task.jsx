import binLogo from '../../assets/bin-logo.png'
import editLogo from '../../assets/edit-logo.png'

export function Task({task}){
  console.log(task);
  return (
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
        <button>
          <img src={editLogo}></img>
        </button>
      </div>

      <div className="task-delete">
        <button>
          <img src={binLogo}></img>
        </button>
      </div>
      

    </div>
  );
}