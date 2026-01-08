import React from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import './Card.css';

export default function Card({ task, deleteTask, moveTask }) {

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteTask(task.id);
  };

  return (
    <div className='card'>
      <div className='details'>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>

      <div className='footer'>
        <div className='status'>
          <p>{task.priority}</p>
          <button className='delete-btn' onClick={handleDelete}>
            <RiDeleteBin6Fill />
          </button>
        </div>

        {/* 🔽 MOVE BUTTONS */}
        <div className="move-actions">
          {task.priority === 'low' && (
            <button onClick={() => moveTask(task.id, 'medium')}>
              ➜ In Progress
            </button>
          )}

          {task.priority === 'medium' && (
            <>
              <button onClick={() => moveTask(task.id, 'low')}>
                ⬅ To-Do
              </button>
              <button onClick={() => moveTask(task.id, 'high')}>
                ➜ Completed
              </button>
            </>
          )}

          {task.priority === 'high' && (
            <button onClick={() => moveTask(task.id, 'medium')}>
              ⬅ In Progress
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
