import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Pour générer un ID unique
import todo_icon from '../assets/todo_icon.png';
import TodoForm from './TodoForm';
import TaskList from './TaskList';

const Todo = () => {
  const [tasks, setTasks] = useState([]);  // Store tasks with completion state

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));  // Parse and load tasks from localStorage
    }
  }, []);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));  // Save tasks as a JSON string
    }
  }, [tasks]);

  // Function to add a new task
  const add = (inputText) => {
    if (inputText.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks, 
        { id: uuidv4(), text: inputText, completed: false }  // Add new task with 'completed' state and unique ID
      ]);
    }
  };

  // Function to toggle task completion
  const toggleTaskCompletion = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }  // Toggle the 'completed' state
          : task
      )
    );
  }, []);

  // Function to delete a task
  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  return (
    <div className="bg-white place-self-center w-full max-w-md flex flex-col p-5 sm:p-7 min-h-[550px] rounded-xl border-8 border-gray-200 shadow-md">
      {/* Title */}
      <div className="flex items-center mt-4 sm:mt-7 gap-2">
        <img className="w-8 sm:w-10" src={todo_icon} alt="todo icon" />
        <h1 className="text-xl sm:text-2xl font-bold">Todo App</h1>
      </div>

      {/* Todo Form */}
      <TodoForm onAddTask={add} />

      {/* Task List */}
      <div className="flex-1 overflow-auto mt-4">
        <TaskList tasks={tasks} onToggleTaskCompletion={toggleTaskCompletion} onDeleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default Todo;
