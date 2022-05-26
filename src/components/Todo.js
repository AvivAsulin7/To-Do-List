import React, { useContext, useState } from "react";
import todoItems from "../contexts/todoItems";

function Todo(props) {
  const { list, setList } = useContext(todoItems);
  // const [isDone, setIsDone] = useState(false);

  function deleteItem(item) {
    setList(list.filter((i) => i != item));
    // setIsDone((prevValue) => {
    //   return !prevValue;              INSTEAD REMOVE --> I PUT LINE THROUGH
    // });
  }

  return (
    <div className="item">
      <li /*style={{ textDecoration: isDone ? "line-through" : " none" }}*/>
        {props.item}
      </li>
      <button
        onClick={() => {
          deleteItem(props.item);
        }}
      >
        <span>Delete</span>
      </button>
    </div>
  );
}

export default Todo;
