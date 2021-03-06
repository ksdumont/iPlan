import React from "react";
import "./Task.css";

export default function Task(props) {
  return props.member !== undefined ? (
    <div className="Task">
      <div className="task-left">
        <p>Task: {props.task}</p>
        <p>Name: {props.member.name}</p>
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
  ) : ''
}
