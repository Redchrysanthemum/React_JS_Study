import { useState, useEffect } from "react";
import Movie from "./Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // async-await를 이용한 작성
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
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
            <Movie
              key={argument.id}
              medium_cover_image={argument.medium_cover_image}
              title={argument.title}
              year={argument.year}
              summary={argument.summary}
              genres={argument.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
