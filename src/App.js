import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ContactUs from "./Pages/ContactUs";
import Homepage from './Pages/Homepage';
import NewEstimation from "./Pages/NewEstimation";
import OurServicesForm from "./Pages/OurServices";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Contact-Us" element={<ContactUs />} />
        <Route path="Our-Services" element={<OurServicesForm />} />
        <Route path="New-Estimation" element={<NewEstimation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
