import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import CreateTodo from './Components/CreateTodo'
import Todo from './Components/Todo'

function App() {
  const [todo, setTodos] = useState([])
  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once on mount

  const fetchData = async () => {
    try {
      const response = await axios.get('https://todo-backend-lac-omega.vercel.app/get-todos');
      console.log(response.data.todos)
      setTodos(response.data.todos); 
    } catch (error) {
      console.error('Error fetching tor ma:', error);
    }
  };
  
  return (
    <div>
      <h1>TODO App</h1>
      <CreateTodo fetchData={fetchData}/>
      <Todo todos ={todo} fetchData ={fetchData} />
    </div>
  )
}

export default App
