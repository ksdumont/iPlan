import React from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'

export default function Nav(props) {
    
    return props.trip !== undefined ? (
        <div> 
            <section className='Nav'>
            <Link to='/'><button className="logo">iPlan</button></Link>
                <h2 className='id'>ID: {props.trip.id}</h2>   
            </section> 
            <section className='title'>
                <h1 className='title'>{props.trip.title.toUpperCase()}</h1>
            </section>
        </div>
        
    ) : ''
}