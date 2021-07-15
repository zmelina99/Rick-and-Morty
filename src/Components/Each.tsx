import React from "react";
import { Character } from './Types'

type Props = {
    character: Character;
}
const Each: React.FC<Props> = ({ character: {id, name, species, location, gender, status} }) => {
    return (
        <div className="character">
                 <div className="container">
                    <h2>{name}</h2>
                    <div className='info'>
                        <span>Status: {status}</span>
                        <span>Species:{species}</span>
                        <span>Gender: {gender}</span>
                        <span>Location:{location.name}</span>
                        <img src = {`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}/>
                    </div>
            </div> 
        </div>
    )
} 
export default Each

