import React from 'react';
import './Cards.css';
import Card from './Card.jsx';
import SearchBar from './SearchBar.jsx'
import Fav from './Fav.jsx'

export default function Cards({characters, onClose, onSearch, fav}){
   console.log(characters)
    return(
    
        <div className='cards'>
        <Fav
        fav={fav}
        />
        <SearchBar
        onSearch={onSearch}
        />
        
            {characters.map((card, index) => <Card           
                key={index}
                name={card.name}
                species={card.species}
                id={card.id}
                /* img={card.picture} */
                /* location={card.location.name}  */
                onClose={() => onClose(card.id)}
                fav={() => fav(card.id)}
      
            />)}
        </div>
    )
}

