import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home/HomePage"
import axios from "axios";
import { useEffect,useState,useCallback} from "react";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <>
      {/* 2. Place the Container here. It won't interfere with your routes. */}
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // or "light" / "dark"
      />

      <Routes>
        <Route index element={<HomePage tasks={tasks} loadTasksData={loadTasksData} />} />
      </Routes>
    </>
  );
}


export default App
