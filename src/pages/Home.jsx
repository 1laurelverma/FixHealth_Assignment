import React from "react";
import NavBar from "../components/navBar";
import HeroSection from "../components/heroSection";
import Testimonial from "../components/testimonial";
import BookingForm from "../components/bookingForm";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <BookingForm />
      <Testimonial />
    </div>
  );
};

export default Home;
