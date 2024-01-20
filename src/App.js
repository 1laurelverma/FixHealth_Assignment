import "./App.css";
import HeroSection from "./components/heroSection.jsx";
import Testimonial from "./components/testimonial.jsx";
import BookingForm from "./components/bookingForm.jsx";
import NavBar from "./components/navBar.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <BookingForm />
      <Testimonial />
    </div>
  );
}

export default App;
