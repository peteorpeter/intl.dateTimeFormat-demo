import './Nav.css';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <NavLink to="relative-time-format" activeClassName='active'>RelativeTimeFormat</NavLink>
            <NavLink to="date-time-format" activeClassName='active'>DateTimeFormat</NavLink>
        </nav>
    )
}

export default Nav
