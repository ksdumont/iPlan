import React from 'react';
import './List.css'
import Card from '../Card/Card'

export default function List(props) {
    return (
        <section className="List">
        <header className="List-header">
            <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
        {props.cards.map((card) =>
            <Card
            key={card.id}
            id={card.id}
            task={card.task}
            member={card.member}

            /> 
            )}
            <button type='button' className='List-add-button' onClick={() => props.onClickAdd(props.id)}>+ Add Random Card</button>
        </div>
    </section>
    )

}