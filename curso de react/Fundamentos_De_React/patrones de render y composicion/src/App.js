import React from 'react';
import './styles/App.css';
import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {useTodos} from './hooks/useTodos';
import {TodoList} from "./components/TodoList";
import {TodoItem} from "./components/TodoItem";
import {CreateTodoButton} from "./components/CreateTodoButton";
import {Modal} from './modal';
import {TodoForm} from "./components/TodoForm";
import {TodoHeader} from "./components/TodoHeader";

//RENDER PROPS:
/*
Se refiere a un patron o tecica para compartir codigo
entre componentes utilizando una propiedad cuyo valor es una funcion EJEMPLO
<TodoList render={data => (
   <h1>Hello {data.target}</h1>
)}/>
*/
const App = () => {
    const {
        loading,
        error,
        searchTodos,
        onDelete,
        onComplete,
        openModal,
        setOpenModal,
        completeTodos,
        totalTodos,
        input,
        setInput,
        addTodo
    } = useTodos();
    return (
        <React.Fragment>
            <TodoHeader>
                <TodoCounter
                    totalTodos={totalTodos}
                    completeTodos={completeTodos}
                />
                <TodoSearch
                    setInput={setInput}
                    input={input}
                />
            </TodoHeader>
            <TodoList>
                {loading && <p>Estamos cargando....</p>}
                {error && <p>Hubo un error....</p>}
                {(!loading && !searchTodos.length) && <p> Crea tu primer TODO </p>}
                {
                    searchTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.complete}
                            onCompleted={() => onComplete(todo.text)}
                            onDelete={() => onDelete(todo.text)}
                        />
                    ))
                }
            </TodoList>
            {
                !!openModal && (
                    <Modal>
                        <TodoForm addTodo={addTodo} setOpenModal={setOpenModal()}/>
                    </Modal>
                )
            }
            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
};

export default App;
