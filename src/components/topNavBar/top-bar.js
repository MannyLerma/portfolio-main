import "./top-bar.css";
import logo from "./logo.png";


 const TopNavBar = () => {

    return (
        <div className="top-nav-container">
            <a href="#home">
                <div className="brand-container">
                <img src={logo} alt="logo" width="68px" height="68px" />
                <p className="title">Mannylerma.com</p>
                </div>
            </a>
            <div className="links">
                <a href="#work"><p>Work</p></a>
                <a href="#resume"><p>Resume</p></a>
                <a href="#about"><p>About</p></a>
                <a href="#contact"><p>Contact</p></a>
            </div>
        </div>
    )
}

export default TopNavBar;