import React from 'react';
import './Member.css'

export default function Member(props) {
    return (
        <div>
            {props.trips.members.map(member => {
            return (
                <ul>
                    <li>{member}</li>
                </ul>
            )
        })}
        </div>

    )
}