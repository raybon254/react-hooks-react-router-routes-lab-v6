import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
   const [actorsData, setactorsData] = useState([])
  fetch("http://localhost:4000/actors")
  .then((r) => r.json() )
  .then((actors => setactorsData(actors)))
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {actorsData.map(actor => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
