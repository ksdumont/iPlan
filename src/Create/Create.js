import React from 'react';
import './Create.css'
import {Link} from 'react-router-dom'

export default function Create() {
    return (
        <div>
            <header>
                <h1>iPlan</h1>
            </header>

            <form>
                <label>Trip Title:</label>
                <input type='text' aria-label='Trip Name' />
                <label>Your Name:</label>
                <input type='text' aria-label='Your Name' />
                <Link to='/trip/:tripId'><button>Create</button></Link>
            </form>
        </div>
    );
}