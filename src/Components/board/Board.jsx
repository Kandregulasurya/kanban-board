import React from 'react';
import './Board.css';
import Card from '../card-ui/Card';

export default function Board({ tasks, moveTask, deleteTask }) {

  /* Allow drag over */
  const allowDrop = (e) => {
    e.preventDefault();
  };

  /* Handle drop */
  const onDrop = (e, priority) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('taskId');
    if (!id) return;
    moveTask(Number(id), priority);
  };

  /* Render tasks based on priority */
  const renderTasks = (priority) => {
    return tasks
      .filter(task => task.priority === priority)
      .map(task => (
        <Card
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          moveTask={moveTask}   // 🔥 for button-based movement
        />
      ));
  };

  return (
    <div className='board'>

      {/* ===== TO DO ===== */}
      <div
        className='low'
        onDragOver={allowDrop}
        onDrop={(e) => onDrop(e, 'low')}
      >
        <div className='head'>
          <h2>To-Do</h2>
          <p>{tasks.filter(t => t.priority === 'low').length}</p>
        </div>
        <div className='taskList'>
          {renderTasks('low')}
        </div>
      </div>

      {/* ===== IN PROGRESS ===== */}
      <div
        className='medium'
        onDragOver={allowDrop}
        onDrop={(e) => onDrop(e, 'medium')}
      >
        <div className='head'>
          <h2>In Progress</h2>
          <p>{tasks.filter(t => t.priority === 'medium').length}</p>
        </div>
        <div className='taskList'>
          {renderTasks('medium')}
        </div>
      </div>

      {/* ===== COMPLETED ===== */}
      <div
        className='high'
        onDragOver={allowDrop}
        onDrop={(e) => onDrop(e, 'high')}
      >
        <div className='head'>
          <h2>Completed</h2>
          <p>{tasks.filter(t => t.priority === 'high').length}</p>
        </div>
        <div className='taskList'>
          {renderTasks('high')}
        </div>
      </div>

    </div>
  );
}
