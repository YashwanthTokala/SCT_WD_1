import React from 'react'

const About = () => {
    return (
        <>
            <div style={{ marginTop: "90px" }}>
                <div className="container mt-5 pt-5">
                    <h1 className="text-center mb-4">About</h1>
                    <p className="lead text-center">
                        This project is a responsive Navbar developed as part of an internship at <strong>SkillCraft Technology</strong>.
                        It showcases modern front-end techniques such as dynamic dark mode, mobile-friendly navigation, and dropdown menus using React and Bootstrap.
                    </p>

                    <div className="mt-5">
                        <h3>Technologies Used</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">React.js</li>
                            <li className="list-group-item">Bootstrap 5</li>
                            <li className="list-group-item">React Router DOM</li>
                            <li className="list-group-item">Font Awesome</li>
                        </ul>
                    </div>

                    <div className="mt-5">
                        <h3>Developer Details</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Name:</strong> Yashwanth Tokala</li>
                            <li className="list-group-item"><strong>Role:</strong> Web Developement Intern</li>
                            <li className="list-group-item"><strong>Internship Company:</strong> SkillCraft Technology</li>
                            <li className="list-group-item"><strong>Duration:</strong> [1-06-2025] – [30-06-2025]</li>
                        </ul>
                        <div className="d-flex gap-3 mx-3">
                            <a href="https://www.linkedin.com/in/yashwanth-tokala-086484361/" target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                            <a href="https://github.com/YashwanthTokala" target="_blank" rel="noreferrer">
                                <i className="fab fa-github fa-2x"></i>
                            </a>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3>Acknowledgments</h3>
                        <p>
                            Special thanks to the team at <strong>SkillCraft Technology</strong> for the opportunity to contribute and learn through this Web development internship project.
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default About;