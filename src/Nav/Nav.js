import React from 'react';
import './Nav.css'

export default function Nav(props) {
    console.log(props.trip.id)
    return (
        <div> 
            <section className='Nav'>
                <h2 className='logo'>iPlan</h2>
                <h2 className='id'>ID: {props.trip.id}</h2>   
            </section> 
            <section className='title'>
                <h1 className='title'>{props.trip.title}</h1>
            </section>
        </div>
        
    )
}