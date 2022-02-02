import parseISO from 'date-fns/parseISO';
import locale from 'date-fns/locale/pt-BR';
import format from 'date-fns/format';
// console.log(parseISO('2022-01-15').format('dd/mm/yyyy'));

const Movie = ({ movie }) => {

    return (
        <section className="movie-card">
            <img src={`http://image.tmdb.org/t/p/w154${movie.poster_path}`} alt={movie.title} className="movie"/>
            <div className="movie-details">
                <h3 className="movie-title">{movie.title}</h3>
                <h3 className="date">{format(parseISO(movie.release_date), 'dd LLL yyyy', {locale: locale})}</h3>
            </div>
        </section>
    );
}
 
export default Movie;