import React, {Component} from 'react'

export default function AddCardForm() {
    return (
        <form className='add-card-form'>
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

