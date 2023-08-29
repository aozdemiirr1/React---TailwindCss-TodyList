import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
      <div className='App flex flex-col justify-center border border-pro-red my-40 mx-40 h-full rounded-2xl'>
        <div className='App-title flex flex-col w-full'>
          <h1 className='my-10 pb-5 border-b border-pro-grey text-4xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-pro-red to-pro-grey flex justify-center'>Toody List</h1>
          <input className='w-80 flex self-center border border-pro-red rounded-2xl pl-2' type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a new task"></input>
          <button className='my-5 border border-pro-grey rounded-2xl w-96 flex self-center justify-center text-center bg-black text-pro-white hover:bg-pro-red' onClick={addTask}>Add Task</button>
        </div>
        <ul className='flex flex-col self-center justify-center mb-4'>
          {tasks.map((task, index) => (
            <li className='flex flex-col text-center' key={index}>
              {task}
              <button className='border border-pro-grey rounded-2xl bg-pro-red text-pro-white w-20 hover:bg-pro-white hover:text-pro-red' onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>  
      </div>

  );
}

export default App
