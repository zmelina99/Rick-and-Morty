import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import SearchBar from "./SearchBar.jsx";
import Fav from "./Fav.jsx";
import Nav from "./Nav";
import { Character } from "./Types";

type Props = {
  /*  characters: Character[]; */
  /*   handleClose: (selectedCard: Character) => void;  */
};

const Cards: React.FC<Props> = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const getCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => {
        setCharacters(json.results);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className={styles.all}>
      <Nav />

      {/*   <Fav
        fav={fav}
        /> */}
      {/*   <SearchBar
        onSearch={onSearch}
        />  */}
<div className= {styles.cards}>
      {characters.map((character, index) => (
        <Card
          key={index}
          character={character}
          /*  onClose={() => onClose(card.id)}
                fav={() => fav(card.id)} */
        />
      ))}
      </div>
    </div>
  );
};

export default Cards;
