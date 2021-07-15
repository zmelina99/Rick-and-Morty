import React from 'react'
import style from './Home.module.css'
import {Link} from 'react-router-dom';

export default function Home(){
    return (
        <div className ={style.home}> 
         <h2>Welcome to Rick and Morty's world!</h2>
         <button className= 'enter'> <Link to ='/characters'>
                   <span id='text'>Let's explore!</span>
                </Link> </button>
       </div>
    )
}