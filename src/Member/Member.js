import React from 'react';
import './Member.css'

export default function Member(props) {
    const members = props.trip.members.map((member, index) => (
        <li key={index} className='memberName'>{member}</li>
    ))
    return (
        <ul className='members'>
            {members}
        </ul>
    )
}



