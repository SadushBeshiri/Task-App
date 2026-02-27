import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home/HomePage"
import axios from "axios";
import { useEffect,useState } from "react";

function App() {

  const [tasks,setTasks] = useState([]);

  useEffect(() => {

    const loadTasksData = async() => {
      const response = await axios.get('http://localhost:8080/api/v1/tasks');
      setTasks(response.data);
    }

    loadTasksData();
  },[]);

  return (
    <Routes>
      <Route index element={< HomePage  tasks={tasks} />} />
    </Routes>
    
  )
}

export default App
