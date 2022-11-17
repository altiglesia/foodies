import { NavLink } from "react-router-dom";

function NavBar({ isLoggedIn, setIsLoggedIn }) {
    function handleClick() {
        localStorage.clear()
        setIsLoggedIn(false)
    }

    return (
        <nav id="navbar">
            <h1 className="foodies">foodies</h1>
            <ul className="navlinks">
                <NavLink to="/">home</NavLink>
                <NavLink to="/crawl">crawl</NavLink>
                <NavLink to="/faves">faves</NavLink>
                <NavLink to="/friends">friends</NavLink>
                {/* <NavLink to="/judgie">judgie</NavLink> */}
                {isLoggedIn ? <NavLink to="/login" onClick={handleClick}>logout</NavLink> : <NavLink to="/login">login</NavLink>}
            </ul>
        </nav>
    )
}

export default NavBar;