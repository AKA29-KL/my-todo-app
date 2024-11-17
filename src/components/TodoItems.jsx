import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = ({ text, completed, onToggle, onDelete }) => {
  return ( // Affichage des éléments de la liste de tâches
    <div className={`flex items-center my-3 gap-2 transition-all ease-in-out duration-200 ${completed ? 'opacity-50' : ''}`}>
      <div className="flex flex-1 items-center cursor-pointer" onClick={onToggle}>
        <img
          src={completed ? tick : not_tick}
          alt="tick"
          className="w-7"
        />
        <p className={`ml-4 text-[17px] ${completed ? 'line-through text-red-600' : ''}`}>
          {text}
        </p>
      </div>
      <img
        src={delete_icon}
        alt="delete"
        className="w-5 h-5 cursor-pointer filter sepia saturate-0 hover:saturate-100"
        onClick={onDelete}
      />
    </div>
  );
};

export default TodoItems;
