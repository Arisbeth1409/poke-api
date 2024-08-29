import { useState, useEffect } from "react";
import Pokemon from "./components/Pokemon";
import ImgPoke from "./assets/logo.png";

export default function App() {
  //const [count, setCount] = useState(0);
  const [pokemones, setPokemons] = useState([]);

  // recibe dos paràmetros , la función que va a ejecutar y como segundo parámetro
  // un arreglo de dependencias siempre hay que pasarlo
  //useEffect(() => {
  //console.log("useefect sin dependencias");
  //}, []);

  // se ejecuta en 2 ocaciones
  // 1.- cuando el compoente se renderiza o monta por primera vez
  // 2.- cuando alguna de sus dependencias se actualiza

  // useEffect(() => {
  //console.log(
  //  "useefect con dependencias, se ejecuta tambèn al cambiar el esado"
  // );
  //}, [count]);

  // mala práctica
  //useEffect(() => {
  //console.log("sin arreglo");
  //});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((jonsResponde) => {
        setPokemons(jonsResponde.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <h2 className="flex items-center justify-center p-6">
        <img src={ImgPoke} alt="pokes" />
      </h2>
      <section className="grid grid-cols-2  md:grid-cols-5 gap-8 p-5 mt-9">
        {pokemones.map((pokemon, index) => {
          return (
            <article key={`${pokemon}-${index}`}>
              <Pokemon name={pokemon.name} />
            </article>
          );
        })}
      </section>
    </main>
  );
}
