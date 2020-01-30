import React from "react";
import "./Task.css";

export default function Task(props) {
  return (
    <div className="Task">
      <div className="task-left">
        <h3>Task:{props.task}</h3>
        <p>Name:{props.member}</p>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={() => props.onClickDelete(props.id)}
        aria-label="Delete Task"
      >
        x
      </button>
    </div>
  );
}
