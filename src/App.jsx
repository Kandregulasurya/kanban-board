import React, { useEffect, useState } from 'react';
import Header from './Components/header/Header';
import Board from './Components/board/Board';
import Task from './Components/task/Task';
import './App.css';

export default function App() {
  // Load from localStorage
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('kanbanTasks');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks(prev => [...prev, task]);
  };

  // DELETE TASK ✅
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const moveTask = (id, priority) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, priority } : task
    ));
  };

  return (
    <>
      <Header />
      <Task addTask={addTask} />
      <Board tasks={tasks}
       moveTask={moveTask}
      deleteTask={deleteTask}
      />
    </>
  );
}
