import React, {Component} from 'react';
import './List.css'
import Task from '../Task/Task'
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import TripContext from "../TripContext";

export default class List extends Component {
    static contextType = TripContext;
    render() {
        return this.props.tasks !== undefined ? (
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-tasks">
                {this.props.tasks.map((task) => (
                    <Task
                    key={task.id}
                    id={task.id}
                    task={task.task}
                    member={this.context.members.find(m => m.id === task.member)}
                    onClickDelete={this.props.onClickDelete}
                    /> 
                    ))}
                    <button type='button' className='List-add-button' onClick={() => this.props.onClickAdd(this.props.id)}>+</button>
                </div>
                <div className='add-task-form'>
                    {this.props.list.displayAddTaskForm ? <AddTaskForm tripId={this.props.tripId} list={this.props.id}/> : null}
                </div>
            </section>
            ) : null;      
        }
    }
