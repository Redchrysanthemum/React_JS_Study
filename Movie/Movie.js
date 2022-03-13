import PropTypes from "prop-types";

function Movie({ medium_cover_image, title, year, summary, genres }) {
  return (
    <div>
      <h2>
        {title}({year})
      </h2>
      <img src={medium_cover_image} alt={title} />
      <p>{summary}</p>

      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
