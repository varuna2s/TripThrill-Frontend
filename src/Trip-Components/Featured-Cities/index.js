import React, { Component } from 'react';
import "./featured-cities.css";
import southgoa from "../../Images/SOUTHGOA.jpg";
import northgoa from "../../Images/northgoa.jpg";
import coorg from "../../Images/coorg.jpg";
import magaluru from "../../Images/mag.webp";
import munnark from "../../Images/munnark.jpg";
import waynadu from "../../Images/thumbnail-13.jpg";
import waynadu1 from "../../Images/thumbnail-11.jpg";
import {Row,Col} from "antd"

export default class FeaturedCities extends Component {
    render() {
        return (
           <>
           <div className="fea-container">
           <Row>
                    <Col md={6}>
                        <div className="container">
                            <img src={southgoa} alt="Avatar"  className="image"></img>
                            <div class="overlay">
                                <div class="featured-cities-text">SOUTH GOA</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="container">
                            <img src={northgoa} alt="Avatar"  className="image"></img>
                            <div class="overlay">
                                <div class="featured-cities-text">NORTH GOA</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="container">
                            <img src={coorg} alt="Avatar"  className="image"></img>
                            <div class="overlay">
                                <div class="featured-cities-text">COORG</div>
                            </div>
                        </div>
                    </Col>
                    </Row>
                    <Row gutter={3} style={{marginTop:"10px"}}>
                    <Col md={12}>
                        <div className="container">
                            <img src={magaluru} alt="Avatar" className="image"></img>
                            <div class="overlay">
                                <div class="featured-cities-text">CHIKMAGALUR</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="container">
                            <img src={munnark} alt="Avatar" className="image"></img>
                            <div class="overlay">
                                <div class="featured-cities-text">MUNNAR</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="container">
                            <img src={waynadu} alt="Avatar" className="image"></img>
                            <div class="overlay">
                                <div class="featured-cities-text">WAYANAD</div>
                            </div>
                        </div>
                    </Col>
                    </Row>
                    <Row gutter={3} style={{marginTop:"10px"}}>
                    <Col md={6}>
                        <div className="container">
                            <img src={northgoa} alt="Avatar" className="image"></img>
                            <div class="overlay">
                                <div class="featured-cities-text">DANDELI</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="container">
                            <img src={southgoa} alt="Avatar" className="image"></img>
                            <div class="overlay">
                                <div class="featured-cities-text">PANCHGANI</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="container">
                            <img src={waynadu1} alt="Avatar" className="image"></img>
                            <div class="overlay">
                                <div class="featured-cities-text">TAPOLA</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
          </>
        )
    }
}


