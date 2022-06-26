import React from "react";

// Components
// import SkillCard from "../components/SkillCard/SkillCard";
// import { htmlIcon } from "../components/Icons/htmlIcon";
// import { sassIcon } from "../components/Icons/sassIcon";
// import { cssIcon } from "../components/Icons/cssIcon";
// import { javascriptIcon } from "../components/Icons/javascriptIcon";
// import { pythonIcon } from "../components/Icons/pythonIcon";

// ICONS
// Language
import { SiHtml5 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
// Framework and Libraries
import { SiReact } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
// Databases
import { SiSqlite } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
// Platforms
import { SiClickup } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiSparkar } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
import { SiInsomnia } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiHeroku } from "react-icons/si";


// Bootstrap
import { Container } from "react-bootstrap";

// Data
// import { allLangauges } from "../Data";

function AboutPage() {

    return (

    <Container>
        <Container className="px-4 py-5 mb-4 dark-glass">
            <h1>About Suelee Christie</h1>
            <p>
            Hi! I'm Suelee; an aspiring Web Developer from Mandurah, Western Australia. I have been eagerly learning the art of coding for the past year and a half. I've always been a curious person and interested in technology. Thankfully with resourses like the internet, nothing is really too difficult to learn. I have taken this approach and applied to my self-paced studies along with being fortunate enough to have been apart of 2 She Codes programs.
            </p> 
            <p>
            During the She Codes Flash and Plus Programs, I got a deeper understanding of some of the programming concepts that I had already been learning. I was also introduced to new concepts and was able to develop my skills. Since then my knowledge and confidence has grown and I am now able to see these skills being applied into tangible projects such as this website. I am incredibly excited to see what I am able to develop in the near future.
            </p>
            <p>
            Below are some coding languages, libraries, frameworks, databases & platforms that I have used.
            </p>
            <h3>PLEASE WATCH THIS SPACE!</h3>
        </Container>

        <Container className="px-4 py-5 my-4 glass">
            <h2 className="pb-2 border-bottom">Coding Languages</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                {/* {allLangauges.map((skillData, key) => {
                                console.log(skillData)
                                return (
                                    <SkillCard
                                        key={`language-${skillData.id}`}
                                        skillData={skillData} 
                                    />
                                );
                            })} */}
                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiHtml5 className="text-primary fs-1 m-2" />
                    <h3>HTML</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiSass className="text-primary fs-1 m-2" />
                    <h3>SASS</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiCss3 className="text-primary fs-1 m-2" />
                    <h3>CSS</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiJavascript className="text-primary fs-1 m-2"/>
                    <h3>JavaScript</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiPython className="text-primary fs-1 m-2" />
                    <h3>Python</h3>
                </div>

            </div>
        </Container>


        <Container className="px-4 py-5 my-4 dark-glass">
            <h2 className="pb-2 border-bottom">Frameworks & Libraries</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
               
                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiReact className="text-primary fs-1 m-2"/>
                    <h3>React</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiJquery  className="text-primary fs-1 m-2"/>
                    <h3>JQuery</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiDjango className="text-primary fs-1 m-2" />
                    <h3>Django</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiFlask className="text-primary fs-1 m-2" />
                    <h3>Flask</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiBootstrap className="text-primary fs-1 m-2" />
                    <h3>Bootstrap</h3>
                </div>

            </div>
        </Container>


        <Container className="px-4 py-5 my-4 glass">
            <h2 className="pb-2 border-bottom">Databases</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
               
                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiSqlite className="text-primary fs-1 m-2" />
                    <h3>SQLite</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiPostgresql className="text-primary fs-1 m-2" />
                    <h3>PostgresSQL</h3>
                </div>

            </div>
        </Container>


        <Container className="px-4 py-5 mt-4 dark-glass">
            <h2 className="pb-2 border-bottom">Platforms</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
               
                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiHeroku className="text-primary fs-1 m-2" />
                    <h3>Heroku</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiNetlify  className="text-primary fs-1 m-2"/>
                    <h3>Netlify</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiInsomnia className="text-primary fs-1 m-2" />
                    <h3>Insomnia</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiWordpress className="text-primary fs-1 m-2" />
                    <h3>WordPress</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiSparkar className="text-primary fs-1 m-2" />
                    <h3>Spark AR</h3>
                </div>
                
                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiFigma className="text-primary fs-1 m-2" />
                    <h3>Figma</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiAdobexd className="text-primary fs-1 m-2" />
                    <h3>XD</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiAdobeillustrator className="text-primary fs-1 m-2" />
                    <h3>Illustrator</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiAdobephotoshop className="text-primary fs-1 m-2" />
                    <h3>Photoshop</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiAdobeaftereffects className="text-primary fs-1 m-2" />
                    <h3>After Effects</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiCanva className="text-primary fs-1 m-2" />
                    <h3>Canva</h3>
                </div>

                < div className="col d-inline-flex align-items-center justify-content-center mx-auto">
                <SiClickup className="text-primary fs-1 m-2" />
                    <h3>ClickUp</h3>
                </div>

        

            </div>
        </Container>

    </Container>
    )
}

export default AboutPage;