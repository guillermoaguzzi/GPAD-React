import "./Header.css"
import LogoAndSlogan from "../LogoAndSlogan/LogoAndSlogan"
import Navbar from "../Navbar/Navbar"
import CartWidget from "../CartWidget/CartWidget";

const Header = () => {

return (
    <div className="header">
        <LogoAndSlogan />
        <Navbar />
        <CartWidget />
    </div>
)
}

export default Header