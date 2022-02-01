import Movie from './Movie';
import Pagination from './Pagination';

const Movielist = () => {
    return (
        <main className="movie-card">
            <Movie/>
            <Pagination/>
        </main>
    );
}
 
export default Movielist;