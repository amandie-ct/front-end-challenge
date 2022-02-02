import Header from "../Homepage/Header";
import MovieDetails from "./MovieDetails";

const DetailsMainPage = () => {
    return (
        <main>
            <Header/>
            <MovieDetails/>
            <Casting/>
            <Trailer/>
            <Recommended/>
        </main>

    );
}
 
export default DetailsMainPage;