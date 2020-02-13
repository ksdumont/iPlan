import React, {Component} from 'react'
import TripContext from "../TripContext";
import './AddTaskForm.css'

export default class AddTaskForm extends Component {
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
        const id = this.context.tasks.length + 1
        const trip = Number(this.props.tripId)
        const { list } = this.props
        const findMember = this.context.members.find(m => m.name.toLowerCase() === name.toLowerCase() 
        && m.trip === trip) 
        if (!findMember) {
          return alert('member does not exist')
        } 
        const member = findMember.id
        const newTask = {
            id,
            task,
            member,
            trip,
            list
          }
          this.context.addTask(newTask)
          this.context.toggleAddTaskForm(list)
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
            <form className='add-task-form' onSubmit={this.handleSubmit}>
              <input type='text' name='task' value={this.state.task} onChange={this.handleTaskChange}
                      aria-label='task' placeholder='task'required/>
              <input type='text' name='name' value={this.state.name} onChange={this.handleNameChange}
                      aria-label='Your Name' placeholder='name' required/>
              <button type='submit' className='add-task-submit'>+</button>
           </form>
        )
    }
    }


