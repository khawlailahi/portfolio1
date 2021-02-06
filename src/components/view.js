import React, { useEffect } from "react";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Hello from "./Hello.js"
import Card from "./card.js"
import MyPics from "./myPics.js"
import Carsooq from "./carsooq.js"
import MadeWithLove from "./madeWithLove.js"
import Newsy from "./newsy.js"
import Typing from 'react-typing-animation';
import carsooq from "../images/carsooq1.png"
import madewithlove from "../images/madewith1.png"
import logo from "../images/logo 2.png"
import compbg from "../images/compbg.jpg"
import newsy from "../images/newsy1.png"
import gmail from "../images/gmail.png"
import github from "../images/github.png"
import linked from "../images/linked.png"
import image from "../images/image.png"
import image2 from "../images/image2.png"
import image3 from "../images/image3.png"
import image4 from "../images/image4.png"
import code from "../images/code.png"
import { Container, Row, Col, } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./nav.css"
var a = " {   "
var b = " }"
var button = {
    borderRadius: "12px",
    backgroundColor: "#E14631",
    color: "white",
    fontWeight: "bold",
    border: "2px white",
    padding: "10px",
    textAlign: "center",
    margin: "auto",
    display: "grid",

}




export default function View() {


    useEffect(() => {
        var _CONTENT = [
            "  codeLove(); ",
            "  FuelYourPassion();"

        ];
        // Current sentence being processed
        var _PART = 0;

        // Character number of the current sentence being processed 
        var _PART_INDEX = 0;

        // Holds the handle returned from setInterval
        var _INTERVAL_VAL;

        // Element that holds the text
        var _ELEMENT = document.querySelector("#text1");

        // Cursor element 
        var _CURSOR = document.querySelector("#cursor");

        // Implements typing effect
        function Type() {
            // Get substring with 1 characater added
            var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
            if (_ELEMENT !== null) {
                _ELEMENT.innerHTML = text;
                _PART_INDEX++;
            }

            // If full sentence has been displayed then start to delete the sentence after some time
            if (text === _CONTENT[_PART]) {
                // Hide the cursor
                _CURSOR.style.display = 'none';

                clearInterval(_INTERVAL_VAL);
                setTimeout(function () {
                    _INTERVAL_VAL = setInterval(Delete, 50);
                }, 1000);
            }
        }

        // Implements deleting effect
        function Delete() {
            // Get substring with 1 characater deleted
            var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX--;

            // If sentence has been deleted then start to display the next sentence
            if (text === '') {
                clearInterval(_INTERVAL_VAL);

                // If current sentence was last then display the first one, else move to the next
                if (_PART === (_CONTENT.length - 1))
                    _PART = 0;
                else
                    _PART++;

                _PART_INDEX = 0;

                // Start to display the next sentence after some time
                setTimeout(function () {
                    _CURSOR.style.display = 'inline-block';
                    _INTERVAL_VAL = setInterval(Type, 100);
                }, 200);
            }
        }
        _INTERVAL_VAL = setInterval(Type, 100);

    }, [])

    return (
        <div >

            <nav class="navbar navbar-expand-md fixed-top  navbar-dark bg-dark mb-4">
                <a class="navbar-brand" href="#top"><img
                    alt="logo"
                    src={logo}
                    width="100"
                    height="60"
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "-20px"
                    }}
                /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active" >
                            <a class="nav-link" href="#top">HOME <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#projects">PROJECTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#aboutme" tabindex="-1" aria-disabled="true">ABOUT ME</a>
                        </li><li class="nav-item">
                            <a class="nav-link " href="#top" tabindex="-1" aria-disabled="true">CONTACT</a>
                        </li>
                    </ul>

                    <p style={{ textAlign: "center", marginLeft: "200px", color: "white", marginTop: "12px" }}>while(true){a}</p>
                    <div id="text1" ></div><div id="cursor"></div>
                    <p style={{ textAlign: "center", color: "white", marginTop: "12px" }}> {b}</p>

                </div>
            </nav>

            <div style={{
                backgroundImage: `url(${compbg})`,
                backgroundSize: "cover",

                backgroundRepeat: "no-repeat",
            }} > <br /><br /><br />
                <div className="row" id="top" style={{ marginTop: "20px" }}>
                    <div className="col-sm" style={{ marginBottom: "100px", marginLeft: "30px", marginTop: "30px", marginRight: "30px", fontWeight: "bold", borderRadius: "8px", backgroundColor: "rgb(255,255,255,0.5)", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.6)" }} >
                        <Slide left>
                            <Zoom right cascade> <h1 style={{
                                marginLeft: "5%", fontFamily: "Lobster",
                                fontSize: "100px", color: "red"

                            }} >
                                Khawla Ilahi
                                  </h1></Zoom>



                            <h2
                                style={{
                                    marginLeft: "5%",
                                    fontSize: "45px"

                                }}>Full-Stack Software Engineer</h2>
                            <div
                                style={{
                                    marginLeft: "5%",
                                    fontSize: "20px"

                                }}>
                                <Typing speed={20}>
                                    <span > With an Agile mindset,</span><br />
                                    <Typing.Speed ms={20} />
                                    <span >A never-ending passion for coding,</span><br />
                                    <Typing.Speed ms={20} />
    ✿ An innate desire to make the world a better place.✿
  </Typing>




                            </div>

                            <div style={{
                                marginLeft: "20%",
                                fontSize: "20px"

                            }}>
                                <a href="mailto:khawla.ilahi1@gmail.com"><img
                                    alt="gmail"
                                    src={gmail}

                                    height="50px"
                                    width="60px" /></a>
                                <a href="https://www.linkedin.com/in/khawla-ilahi-360146185/" target="_blank" rel="noreferrer"><img src={linked}
                                    alt="linkedin"
                                    height="50px"
                                    width="60px"
                                /></a>
                                <a href="https://github.com/khawlailahi" target="_blank" rel="noreferrer">< img
                                    alt="github"
                                    src={github}
                                    height="40px"
                                    width="60px" /></a><a href="../document/khawla-Ilahi--Resume--2021 (1).pdf" download><i style={{ color: "darkGray", fontSize: "30px", }} class="fas fa-download"></i></a></div>



                        </Slide>




                    </div>
                    <br /> <br /><br /><br /><br /><br /> <br /><br /><br /><br />



                    <div className="col-sm" >
                        <Slide right>

                            <div className="col-sm" style={{ marginTop: "30px" }}> <Card /></div>

                        </Slide>

                    </div>

                </div>

                <br /><br /><br />
                <br /><br /><br /><br /><br /><br />
            </div>
            <slide bottom>
                <Container id="projects">
                    <Row style={{ marginTop: "25px" }}>
                        <Col>
                            <hr
                                style={{
                                    color: "gray",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    width: "50%",
                                    borderWidth: "2px",
                                    height: "5px",
                                }}
                            />
                        </Col>
                        <Col>
                            <h1 style={{ fontFamily: 'Anton', fontSize: "50px", textAlign: "center", color: "#E14631", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}>My Projects</h1>
                        </Col>
                        <Col>
                            {" "}
                            <hr
                                style={{
                                    color: "gray",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    width: "50%",
                                    borderWidth: "2px",
                                    height: "5px",
                                }}
                            />
                        </Col>
                    </Row>
                </Container></slide>
            <br /><br /><br />
            <div className=" container" >
                <div className="row">


                    <div className="col">
                        <Fade bottom> <Slide left>
                            <a href="#carsooq"><Hello
                                alt="made with love project image"
                                img={madewithlove} /></a>
                        </Slide></Fade></div>

                    <div className="col" >
                        <Fade bottom> <Slide right>
                            {/* <br />
                            <br /> */}

                            <div style={{ padding: "25px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}>
                                <h1 style={{ textAlign: "center" }}>Made With Love </h1>
                                <p style={{ padding: "20px" }}>Website that provides homemade business owners with an online store where they can sale their unique products ,
                     while allowing clients an easy access to a large and diverse market of handmade products.</p>

                                <a href="#love" style={{ textDecoration: "none", }}><button style={button}>Learn more</button></a>
                            </div></Slide></Fade></div>


                </div>
            </div>


            <br /><br /><br /><br /><br /><br /><br /><br />
            <div className="container">
                <div className="row">

                    <div className="col">

                        <Fade bottom> <Slide left>         <div className="p-2 container">

                            <a href="#carsooq"><Hello alt=" carsooq project image" img={carsooq} /></a>
                        </div></Slide></Fade>
                    </div>
                    <div className="col">
                        <Fade bottom> <Slide right>

                            <div style={{
                                // marginLeft: "30px",
                                padding: "25px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)"
                            }}>
                                <h1 style={{ textAlign: "center" }}>Carsooq </h1>

                                <p style={{ padding: "20px" }}>E-commerce website for cars where you can sell/rent your car, browse through the available ones and use the provided  filters
                                to find the car of your dreams and Contact the owner by Email.
                    </p>

                                <a href="#carsooq" style={{ textDecoration: "none", }}> <button style={button}>Learn more</button></a>
                            </div></Slide></Fade> </div>
                </div></div>

            <br /><br /><br /><br /><br /><br /><br /><br />

            <div className=" container">
                <div className="row">


                    <div className="col">
                        <Fade bottom> <Slide leftt>
                            <div>
                                <a href="#newsy">  <Hello
                                    alt="newsy project image"
                                    img={newsy} /></a>
                            </div></Slide></Fade></div>

                    <div className="col">
                        <Fade bottom> <Slide right>

                            <div style={{ padding: "25px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}>
                                <h1 style={{ textAlign: "center" }}>Newsy</h1>
                                <p style={{ padding: "20px" }}>A Website for posting and sharing local news , social events, beauty tips and cooking recipes with your community which will help
                                you keep up with all relative news, without getting lost in the chaos of global news.
                    </p>

                                <a href="#newsy" style={{ textDecoration: "none", }}> <button style={button}>Learn more</button></a>
                            </div></Slide></Fade></div>

                </div></div>

            <br /><br /><br /><br /><br />
            <slide bottom>   <Container>
                <Row style={{ marginTop: "25px" }}>
                    <Col>
                        <hr
                            style={{
                                color: "gray",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "50%",
                                borderWidth: "2px",
                                height: "5px",
                            }}
                        />
                    </Col>
                    <Col>
                        <h1 style={{ fontFamily: 'Anton', fontSize: "50px", textAlign: "center", color: "#E14631", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}>About Me</h1>
                    </Col>
                    <Col>
                        {" "}
                        <hr
                            style={{
                                color: "gray",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "50%",
                                borderWidth: "2px",
                                height: "5px",
                            }}
                        />
                    </Col>
                </Row>
            </Container> </slide >
            <br /><br />
            <div className=" container" >
                <div className="row">
                    <div className="col" style={{ marginLeft: "30px" }} >
                        <MyPics />
                        <br />
                        <div style={{ Width: "400px", padding: "25px", fontWeight: "bold", marginBottom: "30px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)", marginRight: "20px", marginTop: "380px" }}>


                            <h4 style={{ fontFamily: 'Anton', fontSize: "20px", textAlign: "center", color: "#F07470", boxShadow: "0px 10px 20px -10px rgba(0, 0, 0, 0.4)" }}>Profile</h4>
                            <br />  <p style={{ fontFamily: "Dancing" }}>•  <span style={{ fontWeight: "normal" }} >(✿◠‿◠)</span> •   I'm a strong Believer in continuous self-improvement, unlocking new potentials in one's self and improving the world around us. </p>

                            <br /> <p style={{ fontFamily: "Dancing" }} >  • ✿ • I crave challenges and seek perfection in the smallest details
                            which helps me write clean , well documented code and build beautifully designed websites.
                  </p>      <a href="#code" style={{ textDecoration: "none", }}> <button style={{
                                borderRadius: "12px",
                                backgroundColor: "#E14631",
                                color: "white",
                                fontWeight: "bold",
                                border: "2px white",
                                padding: "10px",
                                textAlign: "center",

                                marginLeft: "270px",
                                marginRightt: "auto",

                                margin: "auto",

                                display: "grid",

                            }} >Know Me More  </button></a>
                        </div>
                    </div>
                    <br /><br />
                    <div className="col" id="aboutme" style={{ boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)", maxHeight: "700px" }}>
                        <Fade right>
                            <br />
                            <div><h4 style={{ fontFamily: 'Anton', fontSize: "30px", textAlign: "center", marginBottom: "20px", color: "#F07470", boxShadow: "0px 10px 20px -10px rgba(0, 0, 0, 0.4)", }}>Technical Skills</h4>
                                <div className="wrap">
                                    <div className="bar">
                                        <h6 ><img
                                            alt="technical skills"
                                            src={image}
                                            minWidth="10ch"
                                            minHeight="4ch"
                                            width='270vw'
                                            height='80vw'
                                            maxWidth='65ch'
                                            maxHeight='30ch' /><abbr id="firstH">80%</abbr> </h6>
                                        <span id="first"></span>
                                    </div>
                                </div><div className="wrap">
                                    <div className="bar">
                                        <h6 ><img
                                            alt="technical skills"
                                            src={image3}
                                            minWidth="5ch"
                                            minHeight="4ch"
                                            width='280vw'
                                            height='80vw'
                                            maxWidth='50ch'
                                            maxHeight='30ch' /><abbr id="secondH">80%</abbr></h6>
                                        <span id="second"></span>
                                    </div>
                                </div>
                                <div className="wrap">
                                    <div className="bar">
                                        <h6 ><img
                                            alt="technical skills"
                                            src={image2}
                                            minWidth="10ch"
                                            minHeight="4ch"
                                            width='260vw'
                                            height='90vw'
                                            maxWidth='65ch'
                                            maxHeight='30ch' /><abbr id="thirdH">50%</abbr></h6>
                                        <span id="third"></span>
                                    </div>
                                </div>
                                <div className="wrap">
                                    <div className="bar">
                                        <h6><img
                                            alt="technical skills"
                                            src={image4}
                                            minWidth="10ch"
                                            minHeight="4ch"
                                            width='260vw'
                                            height='90vw'
                                            maxWidth='65ch'
                                            maxHeight='30ch' /> <abbr id="forthH">40%</abbr></h6>
                                        <span id="forth"></span>
                                    </div>
                                </div>

                            </div>  </Fade >  </div>
                </div></div>
            <br /><br /><br /><br /><br /><br /><br /><br />

            <slide bottom> <div id="love"><MadeWithLove /></div></slide><br /> <br />
            <slide bottom>  <div id="carsooq"><Carsooq /></div></slide><br /> <br />
            <slide bottom>  <div id="newsy"><Newsy /></div></slide>
            <br /> <br />


            <Container id="code">
                <Row style={{ marginTop: "25px" }}>
                    <Col>
                        <hr
                            style={{
                                color: "gray",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "50%",
                                borderWidth: "2px",
                                height: "5px",
                            }}
                        />
                    </Col>
                    <Col>
                        <h1 style={{ fontFamily: 'Anton', fontSize: "50px", textAlign: "center", color: "#E14631" }}>How I Was Programmed</h1>
                    </Col>
                    <Col>
                        {" "}
                        <hr
                            style={{
                                color: "gray",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "50%",
                                borderWidth: "2px",
                                height: "5px",
                            }}
                        />
                    </Col>
                </Row>
            </Container><br />
            <div id="code"> <img
                alt="about me in code"
                src={code}
                width="80%"
                style={{
                    borderRadius: "10px",
                    opacity: "0.96",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            />
            </div>
            <br />  <br />  <br />  <br />




            <MDBFooter className="font-small pt-4 mt-4 bg-dark" style={{ color: "white" }}>
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title" style={{ fontFamily: 'Parisienne', fontSize: "60px", fontWeight: "bold" }}> Thank you For Visiting</h5>
                            <p>
                                ✿ Feel Free to Contact me  ✿
            </p>
                        </MDBCol>
                        <MDBCol md="6">



                            <h5 className="title">Contact</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="mailto:khawla.ilahi1@gmail.com" style={{ textDecoration: "none", marginLeft: "95px" }}><img
                                        alt="gmail"
                                        src={gmail}

                                        height="50px"
                                        width="60px" /> khawla.ilahi1@gmail.com</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="../document/khawla-Ilahi--Resume--2021 (1).pdf" download style={{ textDecoration: "none", marginLeft: "50px" }}>
                                        <i style={{ color: "darkGray", fontSize: "30px", }} class="fas fa-download"> </i> Download Resume </a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://www.linkedin.com/in/khawla-ilahi-360146185/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><img src={linked}
                                        alt="linkedin"
                                        height="50px"
                                        width="60px"
                                    />khawla ilahi</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://github.com/khawlailahi" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>< img
                                        alt="github"
                                        src={github}
                                        height="40px"
                                        width="60px" /> khawlailahi</a>
                                </li>

                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: Khawla Ilahi
                    </MDBContainer>
                </div>
            </MDBFooter>

        </div >
    )
}

