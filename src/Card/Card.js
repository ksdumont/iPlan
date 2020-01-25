import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className='Card'>
            <button className='delete-button' type='button' onClick = {() => props.onClickDelete(props.id)}>delete</button>
            <h3>Task: {props.task}</h3>
            <p>Who: {props.member}</p>
        </div>
    )
}