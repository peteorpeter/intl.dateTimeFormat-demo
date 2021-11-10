import './Nav.css';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <div className="nav-title">Vanilla JS DateTime Localization</div>
            <NavLink to="date-time-format" activeClassName='active'>Intl.DateTimeFormat</NavLink>
            <NavLink to="relative-time-format" activeClassName='active'>Intl.RelativeTimeFormat</NavLink>
        </nav>
    )
}

export default Nav
