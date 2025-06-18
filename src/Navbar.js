import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMode = () => setDarkMode(!darkMode);
    const theme = darkMode ? "dark" : "light";
    const bg = darkMode ? "bg-dark" : "bg-light";
    const text = darkMode ? "text-white" : "text-dark";
    const scrollClass = scrolled ? `scrolled ${theme}` : "";

    return (
        <div className={`${bg} ${text}`}>
            <style>{`
                .nav-item-div {
                    padding: 5px 10px;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                }
                .nav-item-div:hover {
                    background-color: ${darkMode ? "pink" : "skyblue"};
                }
                .nav-item-div:hover .nav-link {
                    color: ${darkMode ? "#000" : "#fff"} !important;
                }
                .dropdown-item:hover {
                    background-color: ${darkMode ? "pink" : "skyblue"};
                    color: ${darkMode ? "#fff" : "#000"} !important;
                }
                .nav-link {
                    color: ${darkMode ? "#fff" : "#000"} !important;
                }
                .navbar {
                    transition: background-color 0.4s ease, box-shadow 0.4s ease;
                }
                .navbar.scrolled.light {
                    background-color: skyblue !important;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                }
                .navbar.scrolled.dark {
                    background-color: pink !important;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.6);
                }
                .btn-outline-custom {
                    border: 1px solid ${darkMode ? "white" : "black"};
                    color: ${darkMode ? "white" : "black"};
                    background-color: transparent;
                    transition: all 0.3s ease;
                }
                .btn-outline-custom:hover {
                    background-color: ${darkMode ? "pink" : "skyblue"};
                    color: ${darkMode ? "white" : "black"};
                }
            `}</style>

            <nav className={`navbar navbar-expand-lg navbar-${theme} ${bg} shadow fixed-top ${scrollClass}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="nav-links d-flex gap-2 flex-wrap me-auto mb-2 mb-lg-0">
                            {["Home", "About"].map((text, i) => (
                                <div key={i} className="nav-item-div">
                                    <Link className="nav-link" to={text === "Home" ? "/" : `/${text.toLowerCase()}`}>{text}</Link>
                                </div>
                            ))}
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <form className="d-flex me-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" />
                                <button className="btn btn-outline-custom" type="submit">Search</button>
                            </form>

                            <button onClick={toggleMode} className="btn btn-outline-custom">
                                <i className={`fa-solid fa-${darkMode ? "sun" : "moon"}`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;