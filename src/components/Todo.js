import React, { useContext, useState } from "react";
import todoItems from "../contexts/todoItems";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo(props) {
  const { list, setList } = useContext(todoItems);
  const [isDone, setIsDone] = useState(false);

  function deleteItem(item) {
    setList(list.filter((i) => i != item));
    // setIsDone((prevValue) => {
    //   return !prevValue;              INSTEAD REMOVE --> I PUT LINE THROUGH
    // });
  }

  function markItem() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="item">
      <li style={{ textDecoration: isDone ? "line-through" : " none" }}>
        {props.item}
      </li>
      <div>
        <button
          onClick={() => {
            markItem();
          }}
        >
          <span>Mark</span>
        </button>
        <span
          className="delete"
          onClick={() => {
            deleteItem(props.item);
          }}
        >
          <DeleteIcon fontSize="Medium" />
        </span>
      </div>
    </div>
  );
}

export default Todo;
