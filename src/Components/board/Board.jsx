import React from 'react';
import './Board.css';
import Card from '../card-ui/Card';

export default function Board({ tasks, moveTask , deleteTask}) {

  const allowDrop = (e) => {
    e.preventDefault()
    e.stopPropagation();
  };

  const onDrop = (e, priority) => {
      e.preventDefault();
      e.stopPropagation(); 
    const id = e.dataTransfer.getData('taskId');
    moveTask(Number(id), priority);
  };

  const renderTasks = (priority) =>
    tasks
      .filter(task => task.priority === priority)
      .map(task => <Card key={task.id} task={task} deleteTask={deleteTask} />);

  return (
    <div className='board'>

      <div className='low' id='low-tasklist'
        onDragOver={allowDrop}
        onDrop={(e) => onDrop(e, 'low')}
      >
        <div className='head'>
          <h2>To-Do</h2>
          <p>{tasks.filter(t => t.priority === 'low').length}</p>
        </div>
        <div className='taskList'>{renderTasks('low')}</div>
      </div>

      <div className='mediam' id='mediam-tasklist'
        onDragOver={allowDrop}k
        onDrop={(e) => onDrop(e, 'mediam')}
      >
        <div className='head'>
          <h2>In Progress</h2>
          <p>{tasks.filter(t => t.priority === 'mediam').length}</p>
        </div>
        <div className='taskList'>{renderTasks('mediam')}</div>
      </div>

      <div className='hard' id='hard-tasklist'
        onDragOver={allowDrop}
        onDrop={(e) => onDrop(e, 'high')}
      >
        <div className='head'>
          <h2>Completed</h2>
          <p>{tasks.filter(t => t.priority === 'high').length}</p>
        </div>
        <div className='taskList'>{renderTasks('high')}</div>
      </div>

    </div>
  );
}
