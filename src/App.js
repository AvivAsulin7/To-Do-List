import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo";
import todoItems from "./contexts/todoItems";
import InputArea from "./components/InputArea";

function App() {
  const [list, setList] = useState([]);
  const [some, setSome] = useState("");

  function addTodo(some) {
    setList([...list, some]);
    setSome("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div>
        <InputArea addTodo={addTodo} />
      </div>
      <div>
        <todoItems.Provider value={{ list, setList }}>
          <ul>
            {list.map((item, index) => {
              return <Todo key={index} id={index} item={item} />;
            })}
          </ul>
        </todoItems.Provider>
      </div>
    </div>
  );
}

export default App;
