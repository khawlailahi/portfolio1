import React from 'react'
import news from "../images/newsycol.jpg"
import logo from "../images/logonewsy.jpg"
import {
    Container,
    // CardGroup,
    // Card,
    Row,
    Col,

} from "react-bootstrap";
import "./nav.css"
var button = {
    borderRadius: "12px",
    backgroundColor: "#E14631",
    color: "white",
    fontWeight: "bold",
    border: "2px white",
    padding: "10px"

}

export default function Newsy() {
    return (
        <div>

            <br /><br /><br />
            <Container>
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
                        <div className="d-flex" style={{ padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}> <img alt="newsy project" src={logo} height="60px" width="60px" style={{ marginLeft: '20px' }} /> <h1 style={{ fontFamily: 'Anton', fontSize: "50px", textAlign: "center", marginLeft: "30px" }}>Newsy</h1>
                        </div> </Col>
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
                <br /> <p

                    style={{
                        color: "black",
                        fontSize: "15px",
                        textAlign: "center",

                        fontWeight: "bold"
                    }}
                > This website was build from scratch, in 1 week with no previous knowlegde of Angular8.</p> <br />
            </Container>
            <br />
            <div style={{ marginLeft: "70px", textAlign: "center" }}>
                <h2 style={{ fontFamily: 'Arila', fontWeight: "bold" }}>Role</h2>
                <h6 style={{ color: "#F07470", fontWeight: "bold" }}>Scrum Master and Full-Stack Developer</h6></div>
            <br />
            <div className="container" style={{ marginLeft: "80px", maxWidth: "1200px", margin: "0 auto" }} >
                <img
                    alt="newsy project"
                    src={news}
                    id='news'



                /></div>
            <br />
            <div style={{ marginLeft: "70px", maxWidth: "1200px", margin: "0 auto", padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}>  <h2 style={{ fontFamily: 'Arila', fontWeight: "bold", padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}>Concept </h2>

                <p> • ✿ • A Website for posting and sharing local news , social events, beauty tips and cooking recipes with your community which will help
                you keep up with all relative news, without getting lost in the chaos of global news.
                  </p> <br />
                <a href="https://www.youtube.com/watch?v=f-DA-YikVqQ" target="_blank" rel="noreferrer"> <button style={button} >View Live Demo</button></a> <br /> <br />


                <h2 style={{ fontFamily: 'Arila', fontWeight: "bold", padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}>Technologies </h2>
                <li><span style={{ color: "#F1959B", fontWeight: "bold" }}>Front-end : </span> Angular 8</li>
                <li><span style={{ color: "#F1959B", fontWeight: "bold" }}>Back-end : </span> Node JS and Express</li>
                <li><span style={{ color: "#F1959B", fontWeight: "bold" }}>Database : </span> MongoDB</li>
                <li><span style={{ color: "#F1959B", fontWeight: "bold" }}>Storage for Images : </span>Firebase</li>
                <br />
                <h2 style={{ fontFamily: 'Arila', fontWeight: "bold", padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}> Features</h2>
                <li>Add Posts (with picture ).</li>
                <li> Delete posts that you added.</li>
                <li>View and filter posts by category .</li>
                <li>Like posts .</li>
                <li>Save posts to your favorites (to view them later ).</li>
                <li>Unsave  posts that no longer need (delete from favorites ).</li></div>

        </div>
    )
}
