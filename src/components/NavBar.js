import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <NavLink to="/">home</NavLink>
                <NavLink to="/scroll">scroll</NavLink>
                <NavLink to="/likes">likes</NavLink>
                <NavLink to="/friends">friends</NavLink>
            </ul>
        </nav>
    )
}

export default NavBar;