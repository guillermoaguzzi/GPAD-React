import "./Logo.css"

const Logo = () => {
    return (
        <div className="Logo">
            {/* <!-- LOGO --> */}
            <img src={require("./img/full_logo.jpg")} alt=" GPAD Records Logo" className="d-inline-block align-text-top logo" />
        </div>
    )
}

export default Logo