import React from 'react';
import './Nav.css'

export default function Nav(props) {
    return (
        <div> 
            <section className='Nav'>
                <h2 className='logo'>iPlan</h2>
                <h2 className='id'>ID: {props.trips.id}</h2>   
            </section> 
            <section className='title'>
                <h1 className='title'>{props.trips.title}</h1>
            </section>
        </div>
        
    )
}