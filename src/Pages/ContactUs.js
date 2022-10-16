import Navbar from "../Components/Navbar"
import ContactForm from "../Components/ContactForm"
import Footer from "../Components/Footer"

export default function ContactUs() {
    return (
        <div id="background" className="flex flex-col justify-between">
            <Navbar />
            <div className="w-2/6 mx-auto h-screen">
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}