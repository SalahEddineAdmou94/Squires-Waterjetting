import React from 'react'
import Dnd from '../Components/Dnd'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function NewEstimation() {
    return (
        <div id="background" className="flex flex-col justify-between">
            <Navbar />
            <Dnd />
            <Footer />
        </div>
    )
}

export default NewEstimation