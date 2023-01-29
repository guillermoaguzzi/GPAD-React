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
                        <NavbarList title="DEALS" />
                        <NavbarList title="PRODUCTION" />
                        <NavbarList title="POST-PRODUCTION" />
                        <NavbarList title="TRANSCRIPTION" />
                        <NavbarList title="MEDIA" />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar