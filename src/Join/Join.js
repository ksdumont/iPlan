import React from 'react';
import {Link} from 'react-router-dom'

export default function Join() {
    return (
        <div>
            <header>
                <h1>iPlan</h1>
            </header>

            <form>
                <label>Trip id:</label>
                <input type='text' aria-label='Trip Id' />
                <label>Your Name:</label>
                <input type='text' aria-label='Your Name' />
                <Link to='/trip/:tripId'><button>Join</button></Link>
            </form>
        </div>
    )
}