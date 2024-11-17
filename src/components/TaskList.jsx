import React from 'react';
import TodoItems from './TodoItems';

const TaskList = ({ tasks, onToggleTaskCompletion, onDeleteTask }) => {
  if (!tasks || tasks.length === 0) {
    return <p className="text-center text-xl">No tasks added yet!</p>;
  }

  return ( // Affichage de la liste de tâches
    <div className="mt-5">
      {tasks.map((task) => (
        <TodoItems
          key={task.id}  // Utilisation de l'id unique
          id={task.id}   // Passer l'id à TodoItems
          text={task.text}
          completed={task.completed}
          onToggle={() => onToggleTaskCompletion(task.id)}  // Passage de l'id
          onDelete={() => onDeleteTask(task.id)}  // Passage de l'id
        />
      ))}
    </div>
  );
};

export default TaskList;
