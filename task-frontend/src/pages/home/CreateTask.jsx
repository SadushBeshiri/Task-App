import { useRef, useEffect, useState } from "react";
import axios from "axios";

export function CreateTask({ isOpen, onClose, loadTasksData }) {
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

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriorit] = useState("HIGH");

  const handleSubmit = async () => {

  try {
    await axios.post('http://localhost:8080/api/v1/tasks', {
      title,
      priority,
      description,
      dueDate: date
    });
  } catch (error) {
    // 1. Check if the server actually sent a response
    if (error.response) {
      // 2. Access the data field which contains your ErrorDto
      // Based on your Java code, the message is likely in error.response.data.message
      console.log("Backend Error Message:", error.response.data.error);
      
      // To see the full object your backend sent:
      console.log("Full Error Object:", error.response.data);
    } else {
      // Handles network errors (server down, CORS issues, etc.)
      console.log("Error:", error.message);
    }
  }
};

  const closeCreateTask = async (e) => {
    await handleSubmit(e);
    await loadTasksData();

    setTitle("");
    setDescription("");
    setPriorit("HIGH");
    setDate("");

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
        </div><br/>

        <div className="create-task-buttons">
          <button onClick={closeCreateTask}
            style={{ marginRight: "10px" }}
          >Create task</button>
          <button onClick={onClose}>Cancel</button>
        </div>


      </div>
    </dialog>
  );
}