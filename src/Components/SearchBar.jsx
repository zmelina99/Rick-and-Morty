import React, { useState } from "react";
import style from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  const [character, setCharacter] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(character);
    }}>
      <input className={style.info}
        type="text"
        placeholder="Character"
        value={character}
        onChange={e => setCharacter(e.target.value)} /* Cuando haya cambios, agarra el valor del input y setea el character con el nuevo valor */
      />
      <input className ={style.search} type="submit" value="Find" />
    </form>
  );

}