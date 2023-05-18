import React, { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";



function App() {
  const [todos, setToDos] = useState([
    { id: "1", text: "Take the medicine", done: true },
    { id: "2", text: "Do a flip-flop", done: false },
    { id: "3", text: "Become normal", done: true },
  ]);

  function addToDo() {
    if (text.trim().length) {
      setToDos([...todos, { id: new Date().toString(), text, done: false }]);
      setText("");
    }
  }
  const [done] = useState(false);
  const [text, setText] = useState("");
  function HandleTextChange(event) {
    setText(event.target.value);
  }
  function SubmitIt(event) {
    event.preventDefault();
    alert(`Вы задали новое To Do ${text}`);
  }
 
  function toggleDone(id) {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  function deleteToDo(id) {
    setToDos(todos.filter((todo) => todo.id !== id));
  }
  
  return (
    <div className="allToDo">
        <div>
            <form onSubmit={SubmitIt}>
            <input
               type="text"
               value={text}
               done={done.toString()}
               onChange={(e) => HandleTextChange(e)}
             />
            <input type="submit" value="Вписать в список" onClick={addToDo}/>
            </form>
        </div>

        <ToDoList
            todos={todos}
            toggleDone={toggleDone}
            deleteToDo={deleteToDo}
        ></ToDoList>
    </div>
  );
}


export default App;
