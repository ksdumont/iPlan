import React, {Component} from 'react';
import './List.css'
import Card from '../Card/Card'
import AddCardForm from '../AddCardForm/AddCardForm';
import TripContext from "../TripContext";

export default class List extends Component {
    static contextType = TripContext;
    render() {
        return (
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                {this.props.cards.map((card) => (
                    <Card
                    key={card.id}
                    id={card.id}
                    task={card.task}
                    member={card.member}
                    onClickDelete={this.props.onClickDelete}
                    /> 
                    ))}
                    <button type='button' className='List-add-button' onClick={() => this.props.onClickAdd(this.props.id)}>+ Add Task</button>
                </div>
                <div className='add-task-form'>
                    {this.props.list.displayAddTaskForm ? <AddCardForm tripId={this.props.tripId} list={this.props.id}/> : null}
                </div>
            </section>
            )
        
        }
    }
