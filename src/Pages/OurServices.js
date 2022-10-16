import React from 'react'
import OurServicesForm from '../Components/OurServicesForm'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function OurServices() {
    return (
        <div id="background" className="flex flex-col justify-between">
            <Navbar />
            <OurServicesForm />
            <Footer />
        </div>
    )
}

export default OurServices