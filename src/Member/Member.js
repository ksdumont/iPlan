import React from 'react';
import './Member.css'

export default function Member(props) { 
    
     const members = props.members.map((member, index) => (
        <li key={index} className='memberName'>{member.name.toUpperCase()}</li>
    )) 
    return members !== undefined ? (
            <div className='members'>
                <p className='title-members'>MEMBERS</p>
                <ul className='member-names'>
                    {members}
                </ul>
            </div>
    ) : ''
}



