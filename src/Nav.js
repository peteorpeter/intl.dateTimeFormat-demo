import './Nav.css';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/relative-time-format">RelativeTimeFormat</Link>
            <Link to="/date-time-format">DateTimeFormat</Link>
        </nav>
    )
}

export default Nav
