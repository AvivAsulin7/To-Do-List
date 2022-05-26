import React from "react";
import { useState } from "react";

function InputArea(props) {
  const [some, setSome] = useState("");

  function takeTodo(event) {
    setSome(event.target.value);
  }

  return (
    <div className="form">
      <input onChange={takeTodo} type="text" value={some} />
      <button
        onClick={() => {
          props.addTodo(some);
          setSome("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
