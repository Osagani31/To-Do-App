import { useState } from 'react'

import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput('');
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col items-center justify-start px-6 py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">🌿 My To-Do List</h1>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task..."
            className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 text-lg"
          />
          <button
            onClick={addTask}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg transition"
          >
            Add Task
          </button>
        </div>

        <ul className="space-y-4 overflow-y-auto max-h-[60vh]">
          {tasks.length === 0 && (
            <p className="text-center text-gray-400 text-lg">No tasks yet. Add something! 🌱</p>
          )}

          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between px-5 py-4 rounded-xl border ${
                task.completed ? 'bg-green-100' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                  className="w-5 h-5 accent-green-500"
                />
                <span
                  className={`text-xl ${
                    task.completed ? 'line-through text-gray-500' : ''
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700 text-2xl transition"
                title="Delete"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;