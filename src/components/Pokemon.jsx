import React from "react";
import { useEffect, useState } from "react";

export default function Pokemon({ name }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((reponse) => reponse.json())
      .then((jsonResponse) => {
        setPokemon(jsonResponse);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <article className="bg-white  rounded-[10px] flex items-center justify-center flex-col text-zinc-500 text">
      <img
        src={pokemon.sprites?.other["official-artwork"]?.front_default}
        alt={name}
      />
      <h2 className="p-4 font-semibold capitalize">{name}</h2>
    </article>
  );
}
