import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";


function Directors() {
  const [directors, setdirectors] = useState([])

  useEffect(()=> {
    fetch('http://localhost:4000/directors')
    .then((r) => r.json())
    .then((name) => setdirectors(name))
  }, [])
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
       {directors.map(director =>
              <article key={director.id}>
              <h2>{director.name}</h2>
              <h3>{director.id}</h3>
              <ul>
             {director.movies.map((movie, index) =>{
              return <li key={index}>{movie}</li>
             })}
              </ul>
        </article>)}
      </main>
    </>
  );
};

export default Directors;
