import { NavLink } from "react-router-dom"

import "./Navbar.css"
import NavbarList from "../NavbarList/NavbarList"

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent navBoostrap">
                <div className="container-fluid bg-transparent navBoostrap" >
                    {/* <!-- BUTTON --> */}
                    <button className="navbar-toggler bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* PAGES */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        {/* <NavbarList title="DEALS" /> */}
                        <NavLink to="/" className={({isActive})=> isActive ? "active-navbar" : "navbar-item"}>
                        <NavbarList title="ALL" />
                        </NavLink>
                        <NavLink to="/category/production" className={({isActive})=> isActive ? "active-navbar" : "navbar-item"}>
                        <NavbarList title="PRODUCTION" />
                        </NavLink>
                        <NavLink to="/category/post-production" className={({isActive})=> isActive ? "active-navbar" : "navbar-item"}>
                        <NavbarList title="POST-PRODUCTION" />
                        </NavLink>
                        <NavLink to="/category/others" className={({isActive})=> isActive ? "active-navbar" : "navbar-item"}>
                        <NavbarList title="OTHERS" />
                        </NavLink>
                        {/* <NavbarList title="TRANSCRIPTION" />
                        <NavbarList title="MEDIA" /> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar