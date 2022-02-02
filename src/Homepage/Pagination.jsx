import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ page }) => {
    return (
        <footer className="pages">
            {/* <FontAwesomeIcon icon={faChevronLeft}/> */}
            <p>{page.page}</p>
            <FontAwesomeIcon icon={faChevronRight}/>
            <p>Última</p>
        </footer>
    );
}
 
export default Pagination;