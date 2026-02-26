import binLogo from '../../assets/bin-logo.png'
import editLogo from '../../assets/edit-logo.png'

export function Task(){
  return (
    <div className="task">
      <div className="task-details">
        <div className="task-details-text">
          <h2>title</h2>
          <p>description</p>
        </div>

        <div className="task-details-status">
          <p>Priority:</p>
          <p>Due Date:</p>
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