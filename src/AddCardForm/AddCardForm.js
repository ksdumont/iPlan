import React, {Component} from 'react'
import TripContext from "../TripContext";

export default class AddCardForm extends Component {
    static contextType = TripContext;
    
    constructor(props) {
        super(props)
        this.state = {
            task: '',
            name: ''
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        const { task, name } = this.state
        const {id} = this.context.allCards.length
        const trip = this.props.match.params.tripId
        const newTask = {
            id,
            task,
            member: name,
            trip,
            list: 1
          }
          this.context.addTask(newTask)
    }
    handleTaskChange = e => {
        const task = e.target.value;
        this.setState({
          task
        });
      };
      handleNameChange = e => {
        const name = e.target.value;
        this.setState({
          name
        });
      };
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='add-card-form'>
            <label>Task:</label>
            <input type='text' name='task' value={this.state.task} onChange={this.handleTaskChange}
                    aria-label='task' required/>
            <label>Who:</label>
            <input type='text' name='name' value={this.state.name} onChange={this.handleNameChange}
                    aria-label='Your Name' required/>
            <button type='submit'>+</button>
        </form>
        )
    }
    }


