import React from "react";

import { Container } from "react-bootstrap";

function ProjectsPage() {
    return (

        <Container>
            <Container className="px-4 py-5 mb-4 dark-glass">
                <h1>My Projects</h1>
                <p>
                This is a collection of some of the projects that I have been working on.
                </p> 
            </Container>
    
            <Container className="px-4 py-5 my-4 glass">
                <h2 className="pb-2 border-bottom">She Codes Plus Program</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
    

                    <div className="col-md-7">
                        <a href="https://sheltered-island-04277.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/xTbbyRxW/React2.gif" alt="React Project Example"/>
                        </a>
                        <a href="https://sheltered-island-04277.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/KjC3hkzq/React1.gif" alt="React Project Example"/>
                        </a>
                    </div>
                    <div className="col-md-5">
                        <h3>React Project</h3>
                        <p>
                            During our React module we learnt how to use React and how to link our React Apps to our Back End APIs. We were tasked with creating a crowdfunding web application.
                            I created a crowdfunding website called Sport Support which enables sporting clubs to fundraise for projects that they have. This is achieved by posting a project and then having supporters pledge a dollar amount to the project.
                        </p>
                        <a className="btn btn-primary" href="https://sheltered-island-04277.herokuapp.com/" target="_blank" rel="noopener noreferrer">Check It Out</a>
                    </div>
                
    
                    
                    <div className="col-md-7">
                        <a href="https://cryptic-cove-68189.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/63387L4b/Django3.gif" alt="Django Project Example" />
                        </a>
                        <a href="https://cryptic-cove-68189.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/yWqxrMQ2/Django2.gif" alt="Django Project Example" />
                        </a>
                    </div>
                    <div className="col-md-5">
                        <h3>Django Project</h3>
                        <p>
                            During our Django Module, our project was to create a News website.

                            I look a slightly different approached and tried to be a little more creative. My project has the same functionality but rather than looking like a news website or a blog, it is designed to look like a bulletin board. I wanted to mimic one as much as possible and challenge myself.
                        </p>
                        <a className="btn btn-primary" href="https://cryptic-cove-68189.herokuapp.com/" target="_blank" rel="noopener noreferrer">Check It Out</a>
                    </div>

    
                    <div className="col-md-7">
                        <a href="https://magnificent-yeot-66c347.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/wxnkp3SY/Html2.gif" alt="HTML & CSS Project Example" />
                        </a>
                        <a href="https://magnificent-yeot-66c347.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/gjLrszDv/Html1.gif" alt="HTML & CSS Project Example" />
                        </a>
                    </div>
                    <div className="col-md-5">
                        <h3>HTML & CSS Project</h3>
                        <p>In our HTML & CSS module, we were given the task of creating a portfolio website for ourselves. Again, I tried to challenge myself and create something less traditional. My inspiration was a glass tablet. I ended up teaching myself how to use JQuery during the process and was very happy with how it turned out. The functionality was could have been improved but the novelty of the website was excellent in my opinion.</p>
                        <a className="btn btn-primary" href="https://magnificent-yeot-66c347.netlify.app/" target="_blank" rel="noopener noreferrer">Check It Out</a>
                    </div>
    
                    <div className="col-md-7">
                        <a href="https://thawing-sierra-22554.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/hjPdLR6r/Group2.gif" alt="Group Project Example" />
                        </a>
                        <a href="https://thawing-sierra-22554.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/T2NrchRW/Group1.gif" alt="Group Project Example" />
                        </a>
                    </div>
                    <div className="col-md-5">
                        <h3>Group Project</h3>
                        <p>During our Group Project, we were put in a group of 5 and worked on a webiste that connects young women to inspiring mentors and role models. We learnt how to utilise GitHub for collaboration and work from branches. It was a very insightful module and a lot was learnt from the process.</p>
                        <a className="btn btn-primary" href="https://thawing-sierra-22554.herokuapp.com/" target="_blank" rel="noopener noreferrer">Check It Out</a>
                    </div>

                    <div className="col-md-7">
                        <a href="https://github.com/SheCodesAus/she-codes-python-weather-project-spewlee" target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/SxCCqrcW/Python.gif" alt="Python Project Example" />
                        </a>
                    </div>
                    <div className="col-md-5">
                        <h3>Python Project</h3>
                        <p>This was the first project of the She Codes Plus Program. We applied our Python skills and created Functions that offered solutions for analysing weather data.</p>
                        <a className="btn btn-primary" href="https://github.com/SheCodesAus/she-codes-python-weather-project-spewlee" target="_blank" rel="noopener noreferrer">Check It Out</a>
                    </div>
    
                </div>
            </Container>
    
    
            <Container className="px-4 py-5 my-4 dark-glass">
                <h2 className="pb-2 border-bottom">She Codes Flash</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                   
                <div className="col-md-7">
                        <a href="https://mystifying-mirzakhani-608926.netlify.app/index.html" target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/Bbb20fC6/Flash.gif" alt="Flask Project Example" />
                        </a>
                    </div>
                    <div className="col-md-5">
                        <h3>Flask Project</h3>
                        <p>During the week long Flash Program, we touched on the fundamentals of Web Development. We utlilised the Flask Framework to put together a website showcasing what we had learnt from the week.</p>
                        <a className="btn btn-primary" href="https://mystifying-mirzakhani-608926.netlify.app/index.html" target="_blank" rel="noopener noreferrer">Check It Out</a>
                    </div>
    
                </div>
            </Container>
    
    
            <Container className="px-4 py-5 my-4 glass">
                <h2 className="pb-2 border-bottom">Personal Projects</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                   
                    <div className="col-md-7">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/dVPZWygD/Time-Sheet.gif" alt="Timesheet Project Example" />
                    </div>
                    <div className="col-md-5">
                        <h3>Timesheet Project</h3>
                        <p>This project was created in Google Sheets and App Script. I was able to apply JavaScript to the Google Sheet to add functionality to it. I needed an easy way of tracking the hours that I was working in a week and this was my solution. You are able to "Clock in", "Clock out" and "Clear". There is also the option to track your "Travel" as well as "Work".</p>
                    </div>

                    <div className="col-md-7">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/s2q1g3LQ/YOHFest.gif" alt="YOH Fest Filter Example" />
                    </div>
                    <div className="col-md-5">
                        <h3>YOH Fest Instagram Filter Project</h3>
                        <p>After hearing about my interest in creating Instagram filters, a friend of mine asked if I would be able to make one for an event that she was involved in. This was actually one of the first projects of mine that sparked an interest in learning JavaScript. I was struggling to add additional functionality to the filter and after some research, I discovered that JavaScript would be the answer to all my problems!</p>
                    </div>

                    <div className="col-md-7">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/QdjT2xLj/Falcons-Filter.gif" alt="SMFNC Filter Example" />
                    </div>
                    <div className="col-md-5">
                        <h3>SMFNC Filter Project</h3>
                        <p>This was the very first filter that I have made. Inspired by a YouTube tutorial that I came across after being lost in the imfamous blackhole of YouTube, I decided to give it a crack and use it to generate some excitement for Game Days at my local club.</p>
                    </div>

                    <div className="col-md-7">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/k5wVXhGt/Socials2.gif" alt="SMFNC Womens Football Social Media Example" />
                    </div>
                    <div className="col-md-5">
                        <h3>SMFNC Women's AFL Social Media</h3>
                        <p>Social Media! My way of expressing my creative side while being involved in community sport. This gives me an avenue to develop my graphic design skills while promoting community and women's sport.</p>
                    </div>
    
                </div>
            </Container>
    
    
            <Container className="px-4 py-5 mt-4 dark-glass">
                <h2 className="pb-2 border-bottom">Future Projects</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

                    <div className="col-md-7">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/Gp2sp7hN/Future-Project.gif" alt="Future Project Placeholder" />
                    </div>
                    <div className="col-md-5">
                        <h3>Paint & Sip Game Project</h3>
                        <p>This will more than likely be the first personal project that I tackle after completing the She Codes Plus Program. I had a Paint & Sip night at mine for my birthday this year. It was a great night but upon reflection with one of my friends, we decided that it could have been improved by playing games for a timed period before being given a prompt to paint something. The idea is to replicate a game like Picolo and then to add some custom painting elements to it as well.</p>
                    </div>

                    <div className="col-md-7">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/Gp2sp7hN/Future-Project.gif" alt="Future Project Placeholder" />
                    </div>
                    <div className="col-md-5">
                        <h3>Wishlist App Project</h3>
                        <p>This is something that I have wanted to make for a long time but never knew how to. I was planning on learning React Native to achieve it and wanted to include the ability to integrate it with Facebook somehow.</p>
                    </div>

                    <div className="col-md-7">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://i.postimg.cc/Gp2sp7hN/Future-Project.gif" alt="Future Project Placeholder" />
                    </div>
                    <div className="col-md-5">
                        <h3>Footy Club App Project</h3>
                        <p>While on working on my She Codes projects during a footy camp, my coach joked that I should make an app for our club. I took the joke literally and as a future project that I would like to complete. We already use something for a similar purpose however I want to make an improved custom version.</p>
                    </div>

                </div>
            </Container>
    
        </Container>
        );
}

export default ProjectsPage;