import React from "react";
import { Link } from "react-router-dom";

// Bootstrap
import { Container } from "react-bootstrap";

function HomePage() {
    return (
            <Container>
                <Container className="px-4 py-5 mb-4 glass">
                    <div className="row align-items-center g-lg-5 py-5 rounded-3 m-3">
                        <div className="col-lg-7 text-center text-lg-start">
                            <h1 className="display-5 fw-bold">Check Out My Projects</h1>
                            <p className="col-md-8 fs-4">
                            By browsing this website, you will get the opportunity to learn more about me, what I have been learning and some of the projects that I have been completing. Most of these projects have been completed while participating in the She Codes 2021/2022 Plus Program. 
                            </p>
                            <Link to="/projects">
                                <a href="" className="btn btn-primary text-light fw-bold" role="button">
                                Look At Projects
                                </a>
                            </Link>
                        </div>

                        <div className="col-md-10 mx-auto col-lg-5 ">
                            <img src="https://i.postimg.cc/xTbbyRxW/React2.gif" alt="Examples of projects" className="img-fluid" />
                        </div>
                    </div>
                </Container>
        
                <Container className="px-4 py-5 mt-4 glass">
                    <div className="row align-items-md-stretch">
    
                        <div className="col-md-5 m-3">
                            <div className="h-100 p-5 text-white dark-glass rounded-3">
                                <h2>Get To Know Me</h2>
                                <p>
                                    Learn about my coding journey and what I would like to achieve in the near future.
                                </p>
                                <a href="/about" className="btn btn-primary text-light fw-bold" role="button">
                                Find Out More
                                </a>
                            </div>
                        </div>
    
                        <div className="col-md-5 m-3">
                            <div className="h-100 p-5 text-white dark-glass rounded-3">
                                <h2>Get In Touch</h2>
                                <p>
                                    I would love to hear from you! Please don't hesitate to get in touch.
                                </p>
                                <a href="/contact" className="btn btn-primary text-light fw-bold" role="button">
                                Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
                        
                        
    
            </Container>
            
        )
}

export default HomePage;