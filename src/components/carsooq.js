import React from 'react'
import car from "../images/carcol.jpg"
import logo from "../images/logocar.webp"
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
export default function Carsooq() {
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
                        <div className="d-flex" style={{ padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}> <img alt="carsooq project" src={logo} height="60px" width="60px" style={{ marginLeft: '20px' }} /> <h1 style={{ fontFamily: 'Anton', fontSize: "50px", textAlign: "center", marginLeft: "30px" }}>Carsooq</h1>
                        </div>  </Col>
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
                <br />  <p
                    style={{
                        color: "black",
                        fontSize: "15px",
                        textAlign: "center",
                        fontWeight: "bold"

                    }}
                > This website was build from scratch, in 1 week.</p>
            </Container>
            <br />
            <div style={{ marginLeft: "70px", textAlign: "center" }}>
                <h2 style={{ fontFamily: 'Arila', fontWeight: "bold" }}>Role</h2>
                <h6 style={{ color: "#F07470", fontWeight: "bold" }}>Scrum Master and Full-Stack Developer</h6></div>
            <br />
            <div className="container" style={{ marginLeft: "80px", maxWidth: "1200px", margin: "0 auto" }} >
                <img
                    alt="carsooq project"
                    src={car}
                    id="carsooq1" /></div>
            <br />
            <div style={{ marginLeft: "70px", maxWidth: "1200px", margin: "0 auto", padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}> <h2 style={{ fontFamily: 'Arila', fontWeight: "bold", padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}>Concept </h2>
                <p>• ✿ • E-commerce website for cars where you can sell/rent your car, or browse through the available ones and use the provided  filters
                  to find the car of your dreams.</p> <br />
                <a href="https://www.youtube.com/watch?v=QDzOrYw9HQ0" target="_blank" rel="noreferrer" > <button style={button}>View Live Demo</button></a> <br />
                <br />


                <h2 style={{ fontFamily: 'Arila', fontWeight: "bold", padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}>Technologies </h2>
                <li><span style={{ color: "#F1959B", fontWeight: "bold" }}>Front-end : </span> React JS</li>
                <li><span style={{ color: "#F1959B", fontWeight: "bold" }}>Back-end : </span> Node JS and Express</li>
                <li><span style={{ color: "#F1959B", fontWeight: "bold" }}>Database : </span> MySQL</li>
                <li><span style={{ color: "#F1959B", fontWeight: "bold" }}>Storage for Images : </span> Firebase</li> <br />
                <h2 style={{ fontFamily: 'Arila', fontWeight: "bold", padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}> Features</h2>
                <li>Adding cars for rent or for sale</li>
                <li>Filtering cars by Brand, Year, Color, prices, sale or rent </li>
                <li>Adding cars to your Wishlist</li>
                <li>Remove from your wishlist</li>
                <li>Contacting the owner of the car you want.</li></div>


        </div>
    )
}
