import React, { useState } from 'react';
import { MdOutlinePlaylistAdd } from "react-icons/md";
import './Task.css';

export default function Task({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const handleAdd = () => {
    if (!title) return;

    addTask({
      id: Date.now(),
      title,
      priority,
      description
    });

    setTitle('');
    setDescription('');
    setPriority('low')
  };

  return (
    <div className='taskdata'>
      <h3>Add New Task</h3>
      <div className='inputSection'>
      <input
        type='text'
        placeholder='Task Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='Task Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      </div>
      <label>Task State</label>
      <div className='task-priority'>
        <label>
          <input type="radio" name="priority"
            checked={priority === 'low'}
            onChange={() => setPriority('low')}
          /> To-do
        </label>

        <label>
          <input type="radio" name="priority"
            checked={priority === 'medium'}
            onChange={() => setPriority('medium')}
          /> In Progress
        </label>

        <label>
          <input type="radio" name="priority"
            checked={priority === 'high'}
            onChange={() => setPriority('high')}
          />Completed
        </label>
      </div>

      <button className='btn-add' onClick={handleAdd}>
        <MdOutlinePlaylistAdd /> Add
      </button>
    </div>
  );
}
