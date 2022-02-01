// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';


const Button = ({ genre }) => {
    return (

        <button className="button-filter">
            <p>{genre.name}</p>
            {/* <FontAwesomeIcon icon={faTimesCircle} className="icon" /> */}
        </button>
    );
}

export default Button;