import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

export function UpdateTask({ isOpen, onClose, loadTasksData, task}) {
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

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [date, setDate] = useState(task.dueDate);
  const [priority, setPriorit] = useState(task.priority);
  const [status, setStatus] = useState(task.status);

  useEffect(() => {
  setTitle(task.title);
  setDescription(task.description);
  setDate(task.dueDate ? task.dueDate.substring(0, 10) : "");
  setPriorit(task.priority);
  setStatus(task.status);
}, [task]);

  const handleSubmit = async () => {

    try {
      await axios.put(`http://localhost:8080/api/v1/tasks/${task.id}`, {
        title,
        priority,
        description,
        dueDate: date,
        status: status
      });

      toast.success("Task updated!");
    } catch (error) {
      if (error.response) {
        toast.error(error.response?.data?.error);
      }
    }
  };

  const closeCreateTask = async (e) => {
    await handleSubmit(e);
    await loadTasksData();
    onClose();
  }

  return (
    <dialog ref={ref} onClose={onClose}>
      <div className="create-task-forum">
        <h2>Update task</h2>

        <div
          className="title-input"
          style={{ display: "grid" }}
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
          style={{ display: "grid" }}
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
            style={{ marginRight: "10px" }}>
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
        </div>

        <div className="status-input">
          <p>Select status</p>
          <select
            name="status"
            value={status}
            onChange={(e) => { setStatus(e.target.value) }}
          >
            <option value="OPEN">Open</option>
            <option value="COMPLETE">Complete</option>
          </select>
          
        </div><br/>

        <div className="create-task-buttons">
          <button onClick={closeCreateTask}
            style={{ marginRight: "10px" }}
          >Update task</button>
          <button onClick={onClose}>Cancel</button>
        </div>


      </div>
    </dialog>
  );

}