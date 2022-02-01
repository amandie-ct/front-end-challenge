import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Pagination = () => {
    return (
        <footer className="pages">
            <FontAwesomeIcon icon={faChevronLeft}/>
            <p>1</p>
            <p>2</p>
            <FontAwesomeIcon icon={faChevronRight}/>
            <p>Última</p>
        </footer>
    );
}
 
export default Pagination;