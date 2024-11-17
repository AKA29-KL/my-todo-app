import React, { useState } from 'react';

const TodoForm = ({ onAddTask }) => {
  const [inputText, setInputText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => { // Gestion du formulaire
    e.preventDefault(); 
    if (!inputText.trim()) {
      setErrorMessage('Please enter a task!');
      return;
    }
    onAddTask(inputText);
    setInputText('');
    setErrorMessage('');
  };

  return ( // Affichage du formulaire
    <form className="mt-5 flex flex-col gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add your task"
        className="border-4 p-2 rounded"
      />
      {errorMessage && <p className="text-red-600">{errorMessage}</p>} {/* Affichage du message d'erreur */}
      <button
  type="submit"
  className={`font-bold py-2 px-4 rounded-xl ${inputText.trim() ? 'bg-black text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
  disabled={!inputText.trim()}  // Désactive le bouton si l'entrée est vide
>
  Add +
</button>
    </form>
  );
};

export default TodoForm;
