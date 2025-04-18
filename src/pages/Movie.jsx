import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to fetch movie data");
        }
        return r.json();
      })
      .then((data) => {
        setMovieData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  const movie = movieData.find((m) => m.id.toString() === id);

  if (isLoading) return <p>Loading movie details...</p>;
  if (error) return <p>Error: {error.message}</p>; // ✅ this renders the error message string
  if (!movie) return <p>Movie not found</p>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <span>{movie.genres?.join(", ")}</span>
      </main>
    </>
  );
}

export default Movie;
