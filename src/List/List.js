import React from 'react';
import './List.css'
import Card from '../Card/Card'
import AddCardForm from '../AddCardForm/AddCardForm';

export default function List(props) {
    return (
    <section className="List">
        <header className="List-header">
            <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
        {props.cards.map((card) => (
            <Card
            key={card.id}
            id={card.id}
            task={card.task}
            member={card.member}
            onClickDelete={props.onClickDelete}
            /> 
            ))}
            <button type='button' className='List-add-button' onClick={() => props.onClickAdd(props.id)}>+ Add Task</button>
        </div>
    </section>
    )

}