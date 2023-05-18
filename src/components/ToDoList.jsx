import React from 'react';
import ToDoItem from './ToDoItem'; 

function ToDoList({todos, toggleDone, deleteToDo}){
    return(
        <div>
          <ul>
            {todos.map(todo => {
                return (
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        toggleDone={toggleDone}
                        deleteToDo={deleteToDo}
                    />
                )})
            }
        </ul>    
        </div>
      
    );
};
export default ToDoList;