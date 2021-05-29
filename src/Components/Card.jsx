import React from 'react';
import './Card.css';
import {NavLink} from 'react-router-dom';

export default function Card({result, name, species, id, location, onClose, fav, }){
    console.log(id)
    return (
             <div className='card'>
             <div id="closeIcon" className="row">
                <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
            </div> 
            <div className='card-body'>
                <NavLink to={`/characters/${id}`}>
                    <p className='card-title'>{name}</p> 
                </NavLink>
                <div> 
                    <p>Species: {species}</p>
                </div>
               <div>
                   <img src = {`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} alt= ""/>
                </div>
                <div>
                    <p>Location: {location ? location : "This character has no location"} </p>
                </div> 
            </div> 
            <div>
                <button  onClick={fav} id='fav'>⭐</button>
            </div>
        </div>
       
    )
}

