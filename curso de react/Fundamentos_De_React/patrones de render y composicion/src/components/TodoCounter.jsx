import React from 'react';
import '../styles/TodoCounter.css';
const TodoCounter = ({totalTodos, completeTodos}) => {

    return (
        <div>
            <h2 className="TodoCounter">{`Has completado ${completeTodos} de ${totalTodos} `}</h2>
        </div>
    );
};

export {TodoCounter};