import React from "react";

function ToDoItem({ todo, toggleDone, deleteToDo }) {

return (
<li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleDone(todo.id)}
      />

      <div
        style={{
        textDecoration: todo.done ? "line-through" : "none",
         }}
      >
           {todo.text}
      </div>

      <button onClick={() => deleteToDo(todo.id)}>Удалить</button>
</li>
);
};

export default ToDoItem;