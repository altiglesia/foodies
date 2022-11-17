import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <NavLink to="/">home</NavLink>
                <NavLink to="/crawl">crawl</NavLink>
                <NavLink to="/faves">faves</NavLink>
                <NavLink to="/friends">friends</NavLink>
                {/* <NavLink to="/judgie">judgie</NavLink> */}
                <NavLink to="/login">login</NavLink>
            </ul>
        </nav>
    )
}

export default NavBar;