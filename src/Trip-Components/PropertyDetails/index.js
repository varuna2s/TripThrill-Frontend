import React, { Component } from 'react'
import NavBar from '../Navbar';
import Rcarousel from '../../rcarousel';
import './propertydetails.css';
import Calander from './calender';
import Footer from '../Footer';
export default class PropertyDetails extends Component {
    state = {
        propertydetail: []
    };
    async componentDidMount() {
        try {
            //fecthing data rom backend
            const res = await fetch(`http://127.0.0.1:8000/propertydetails/`);
            const propertydetail = await res.json();
            this.setState({
                propertydetail
            });
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <>
                <NavBar />
                <div className="pro-carousel">
                    <Rcarousel />
                </div>
                <div className="pro-main-block">
                    <div className="pro-head">
                        TripThrill Raindrops Villa
                        </div>
                    <div className="pro-sub-head">
                        Munnar, Kunchithanny Road
                        </div>
                    <Calander />
                </div>
                <Footer />
            </>
        )
    }
}