import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

export function CreateTask({ isOpen, onClose, loadTasksData}) {
  const ref = useRef(null);
  useEffect(() => {
    const createTask = ref.current;

    if (isOpen) {
      createTask.showModal();
    }
    else {
      createTask.close();
    }
  }, [isOpen]);

  const today = new Date().toISOString().split('T')[0];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(today);
  const [priority, setPriorit] = useState("HIGH");

  const handleSubmit = async () => {

  try {
    await axios.post('http://localhost:8080/api/v1/tasks', {
      title,
      priority,
      description,
      dueDate: date
    });

    toast.success("Task added!");
  } catch (error) {
    if (error.response) {
      toast.error(error.response?.data?.error);
    } 
  }
};

  const closeCreateTask = async (e) => {
    await handleSubmit(e);
    await loadTasksData();

    setTitle("");
    setDescription("");
    setPriorit("HIGH");
    setDate(today);

    onClose();
  }

  return (
    <dialog ref={ref} onClose={onClose}>
      <div className="create-task-forum">
        <h2>Create a New task</h2>

        <div 
          className="title-input"
          style={{display:"grid"}}
        >
          <p>Title</p>
          <input
            value={title}
            type="text"
            onChange={(e) => { setTitle(e.target.value) }}
            placeholder="Enter Title">
          </input>
        </div>

      <div 
        className="description-input"
        style={{display:"grid"}}
      >
        <p>Description</p>
        <textarea
          value={description}
          onChange={(e) => { setDescription(e.target.value) }}
          placeholder="Enter a Description">
        </textarea>
      </div>
        

        <div className="date-priority">
          <p>Select Date</p>
          <p>Select Priority</p>
          <input
            type="date"
            value={date}
            onChange={(e) => { setDate(e.target.value) }}
            style={{width:"91%"}}
          >
          </input>
          <select
            name="prioriy"
            value={priority}
            onChange={(e) => { setPriorit(e.target.value) }}
            
          >
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>
        </div><br/>

        <div className="create-task-buttons">
          <button onClick={closeCreateTask}
          style={{width:"98%"}}
            
          >Create task</button>
          <button onClick={onClose}>Cancel</button>
        </div>


      </div>
    </dialog>
  );
}