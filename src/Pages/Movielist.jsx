import Movie from './Movie';
import Pagination from './Pagination';

const Movielist = ({ popularMoviesList }) => {

    return (
        <main className="movie-container">
                {popularMoviesList && popularMoviesList.map((movie) => 
                    <Movie movie={movie} key={movie.id}/>)}
                <Pagination/>
        </main>
    );
}
 
export default Movielist;