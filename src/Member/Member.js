import React from 'react';
import './Member.css'

export default function Member(props) { 
    
     const members = props.members.map((member, index) => (
        <li key={index} className='memberName'>{member.name}</li>
    )) 
    return members !== undefined ? (
            <ul className='members'>
            <h3>Members:</h3>
                {members}
            </ul>
    ) : ''
}



