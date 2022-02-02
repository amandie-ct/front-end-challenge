const Movie = ({ movie }) => {

    return (
        <section className="movie-card">
            <img src={`http://image.tmdb.org/t/p/w154${movie.poster_path}`} alt={movie.title} className="movie"/>
            <div className="movie-details">
                <h3 className="movie-title">{movie.title}</h3>
                <h3 className="date">{movie.release_date}</h3>
            </div>
        </section>
    );
}
 
export default Movie;