import Button from './Button';

const ButtonContainer = ({genres}) => {
    return (
       <section className="row button-container">
        {genres && genres.map ((genre) => {
            return <Button genre={genre} key={genre.id}/>
        })}
        </section>
    );
}

export default ButtonContainer;