import { NavLink } from "react-router-dom";

function Header() {
    return ( 
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                {/* <a className="navbar-brand" href="http://localhost:3000/"> */}
                    <i className="bi-cup-hot me-2"></i>
                    Meal On Time
                </a>
                <ul className="navbar-nav flex-row">
                    <li className="nav-item me-3">
                        <NavLink to="/page2" className="nav-link">
                            Page 2
                        </NavLink>
                    </li>
                    <li className="nav-item me-3">
                        <NavLink to="/page3" className="nav-link">
                            Page 3
                        </NavLink>
                    </li>
                </ul>
            </div>  
        </nav>
     );
}

export default Header;