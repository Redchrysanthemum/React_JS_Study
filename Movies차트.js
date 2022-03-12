import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // async-await를 이용한 작성
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  // .then을 이용한 작성
  /*  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []); */
  return (
    <div>
      {loading ? (
        <h1>로딩중...</h1>
      ) : (
        <div>
          {movies.map((argument) => (
            <div key={movies.id}>
              <h2>{argument.title}</h2>
              <p>{argument.summary}</p>
              {movies.hasOwnProperty("genres") ? (
                <ul>
                  {movies.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
