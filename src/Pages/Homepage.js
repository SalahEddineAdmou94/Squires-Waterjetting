import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"

export default function Homepage() {
    return (
        <div id="background" className="bg-cover flex flex-col justify-between">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    )
}