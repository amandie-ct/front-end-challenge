import ButtonContainer from "./ButtonContainer";

const Navigation = ({ genres }) => {
    return (
        <nav className="nav">
            <div className="nav-container">
                <h1 className="title">Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
                <p>filtre por:</p>
                <ButtonContainer genres={genres}/>
            </div>
        </nav>
    );
}
 
export default Navigation;