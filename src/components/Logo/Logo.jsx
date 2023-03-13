import { Link } from "react-router-dom"

import "./Logo.css"

const Logo = () => {
    return (
        <div className="Logo">
            {/* <!-- LOGO --> */}
            <Link to="/">
            <img src={require("./img/full_logo.jpg")} alt=" GPAD Records Logo" className="d-inline-block align-text-top logo" />
            </Link>
        </div>
    )
}

export default Logo