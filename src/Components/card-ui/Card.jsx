import React  from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import './Card.css';

export default function Card({ task , deleteTask }) {

  const dragStart = (e) => {
    document.body.classList.add('dragging'); // 🔑
    e.dataTransfer.setData('taskId', task.id);
  };
  
   const dragEnd = () => {
    document.body.classList.remove('dragging'); // 🔑
  };
   const handleDelete = (e) => {
    e.stopPropagation();
    e.stopPropagation();
    deleteTask(task.id);
  };

  return (
    <div className='card'
      draggable
      onDragStart={dragStart}
      onDragEnd={dragEnd}
    >
      <div className='details'>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>

      <div className='footer'>
        <div className='status'>
          <button className='delete-btn' draggable={false} onClick={handleDelete}><RiDeleteBin6Fill /></button>
          <p>{task.priority}</p>
        </div>
      </div>
    </div>
  );
}
