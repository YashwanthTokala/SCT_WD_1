import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" style={{ marginTop: "90px" }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="fest1.jpeg" className="d-block w-100" style={{ height: "500px", objectFit: "cover" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="Resources.jpg" className="d-block w-100" style={{ height: "500px", objectFit: "cover" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <div className="container mt-5 pt-5 text-center">
                    <h1 className="display-4">Welcome to My Internship Project</h1>
                    <p className="lead">
                        Built with React and Bootstrap as part of my internship at SkillCraft Technology.
                    </p>
                </div>
                <div className="container mt-5">
                    <h3 className="text-center mb-4">Project Highlights</h3>
                    <div className="row text-center">
                        <div className="col-md-4 shadow">
                            <i className="fas fa-mobile-alt fa-2x mb-2"></i>
                            <h5>Fully Responsive</h5>
                            <p>Adapts beautifully to all screen sizes.</p>
                        </div>
                        <div className="col-md-4 shadow">
                            <i className="fas fa-adjust fa-2x mb-2"></i>
                            <h5>Dark Mode</h5>
                            <p>Toggle between light and dark themes.</p>
                        </div>
                        <div className="col-md-4 shadow">
                            <i className="fas fa-bars fa-2x mb-2"></i>
                            <h5>Dynamic Navbar</h5>
                            <p>Includes dropdowns and scroll transitions.</p>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5 mb-5">
                    <h4>Check out more about this project</h4>
                    <Link to="/about" className="btn btn-outline-dark mt-2">Go to About Page</Link>
                </div>

            </div>
        </>
    )
}

export default Home;