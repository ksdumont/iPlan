import React, {Component} from 'react'

export default class AddCardForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: '',
            name: ''
        }
    }
    handleSubmit = e => {

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


