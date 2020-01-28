import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="Card">
      <div className="card-left">
        <h3>Task: {props.task}</h3>
        <p>Who: {props.member}</p>
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
