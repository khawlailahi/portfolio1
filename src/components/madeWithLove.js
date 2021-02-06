import React from 'react'
import made from "../images/madecol.jpg"
import logo from "../images/logomade.png"
import {
    Container,
    Row,
    Col,

} from "react-bootstrap";
import "./nav.css"
// import Projects from "./projects.js"
var button = {
    borderRadius: "12px",
    backgroundColor: "#E14631",
    color: "white",
    fontWeight: "bold",
    border: "2px white",
    padding: "10px"

}

export default function MadeWithLove() {
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
                        <div className="d-flex" style={{ padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}>
                            <img src={logo}
                                alt="made with love logo"
                                height="60px" width="60px" style={{ marginLeft: '00px' }} />
                            <h1 style={{ fontFamily: 'Anton', fontSize: "40px", textAlign: "center", }}>Made Wtih Love</h1>
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
                >This website was build from scratch, in 4 weeks with no previous knowlegde of Python or Django.</p>
            </Container>
            <br />
            <div style={{ marginLeft: "70px", textAlign: "center" }}>
                <h2 style={{ fontFamily: 'Arila', fontWeight: "bold" }}>Role</h2>
                <h6 style={{ color: "#F07470", fontWeight: "bold" }}>Scrum Master and Full-Stack Developer</h6></div>
            <br />
            <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }} >
                {/* <Projects url={made} /> */}
                <img
                    alt="made with love  project"
                    id="madewithlove1"
                    src={made}

                />
            </div>
            <br />

            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}>
                <h2 style={{ fontFamily: 'Arila', maxWidth: "500px", fontWeight: "bold", padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}>Concept </h2>


                <p> • ✿ • A website that supports homemade businesses by providing them with space (online store ) to showcase and sell their unique products,
                introducing them to a larger market,and offering them the chance to grow and develop their businesses in a competitive and inspiring environment.
                  </p>
                <p> • ✿ • While also providing the consumers of homemade products with an easy to access and all-inclusive market where they can find any homemade product they may need in one place, one website, with an easy to order system.</p>

                <br /> <a href="https://www.youtube.com/watch?v=aF99aEZlPzU&t=320s" target="_blank" rel="noreferrer"> <button style={button} >View Live Demo</button></a><br /> <br />


                <h2 style={{ fontFamily: 'Arila', fontWeight: "bold", padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}>Technologies </h2>
                <li><span style={{ color: "#F1959B", fontWeight: "bold" }} >Front-end : </span> React JS</li>
                <li><span style={{ color: "#F1959B", fontWeight: "bold" }}>Back-end : </span> Python and Django</li>
                <li><span style={{ color: "#F1959B", fontWeight: "bold" }}>Database : </span> MySQL</li>
                <li><span style={{ color: "#F1959B", fontWeight: "bold" }}>Real-time Notification : </span> Firebase</li>
                <br />

                <h2 style={{ fontFamily: 'Arila', fontWeight: "bold", padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" }}> Features</h2>
                <br />
                <div className=" container" style={{ maxWidth: '1200px', }}>
                    <div className="row">


                        <div className="col">


                            <h4 style={{ textAlign: "center", padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)", color: "#F1959B", fontWeight: "bold" }}>Seller</h4><br />
                            <li>Sign up and Have a store (profile ) : where you can display your products.</li>
                            <li>add products (with details and picture ) , Delete , update any product.</li>
                            <li>Visit other stores .</li>
                            <li>eceive Realtime notification about your orders (with location from google maps, and payment status).</li>
                            <li>Reply on the comments you receive on your products .</li>
                            <li>Delete any comment you don't like on your products.</li>
                        </div>
                        {/* < div className="p-2 container" style={{ marginLeft: '40px', }}> */}
                        <div className="col" style={{ marginBottom: "100px" }}>
                            <h4 style={{ textAlign: "center", padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)", color: "#F1959B", fontWeight: "bold" }}>Buyer</h4><br />
                            <li>Sign up to have access to the products.</li>
                            <li>Sign up with your Google account.</li>
                            <li>Filter products by category and by other filters depending on the category.</li>
                            <li>Order the product you want : payment with cash or with credit card.</li>
                            <li>After Ordering , you can rate/ review the store .</li>
                            <li>Comment on products  .</li>
                            <li>Delete the comments that you wrote .</li>
                            <li>Visit stores .</li>
                        </div> <br /><br /><br /><br /><br /><br />

                        {/* < div className="p-2 container" style={{ marginLeft: '40px', }}> */}
                        <div className="col" >
                            <h4 style={{ textAlign: "center", padding: "20px", boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)", color: "#F1959B", fontWeight: "bold" }}>Home Page</h4><br />
                            <li>Super Store : Display of the store with the most orders.</li>
                            <li>Most Popular Stores : Display of the top three most reviewed stores </li>
                        </div>
                    </div> </div></div>

        </div>
    )
}
