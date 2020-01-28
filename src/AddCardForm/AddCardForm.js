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
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='add-card-form'>
            <label>Task:</label>
            <input type='text' name='task' 
                    aria-label='task' required/>
            <label>Who:</label>
            <input type='text' name='name' 
                    aria-label='Your Name' required/>
            <button type='submit'>+</button>
        </form>
        )
    }
    }


