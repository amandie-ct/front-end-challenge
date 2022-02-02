import Poster from "./Poster";
import Title from "./Title";
import Summary from "./Summary";
import Rating from "./Rating";
import Synopsis from "./Synopsis";
import Producers from "./Producers";

const MovieDetails = () => {
    return (
        <section>
            <Poster/>
            <Title/>
            <Summary/>
            <Producers/>
        </section>
    );
}
 
export default MovieDetails;