import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home/HomePage"
import axios from "axios";
import { useEffect,useState,useCallback} from "react";

function App() {

  const [tasks,setTasks] = useState([]);

   const loadTasksData = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  }, []);

  useEffect(() => {
    loadTasksData();
  }, [loadTasksData]);


  return (
    <Routes>
      <Route index element={< HomePage  tasks={tasks} loadTasksData={loadTasksData}/>} />
    </Routes>
    
  )
}

export default App
