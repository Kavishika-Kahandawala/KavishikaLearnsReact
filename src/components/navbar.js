import Logo from "../images/logo.svg";

export default function NavBar(){
    return <nav className="main-nav">
        <img className="main-nav--icon" src={Logo} alt="React Logo"/>
        <h3 className="main-nav--h3">React Facts</h3>
        <h4 className="main-nav--h4">View Projects</h4>
    </nav>
}