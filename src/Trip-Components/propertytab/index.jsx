import React, { Component } from 'react'
import Navbar from "../Navbar"
import Footer from "../Footer"
import CityTabs from "../Tab"

export default class PropertyTab extends Component {
    render() {
        return (
            <>
                <Navbar />
                    <CityTabs />
                <Footer />
            </>
        )
    }
}
