import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Service from "../../components/Service";
import Form from "../../components/Form";

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Form />
      <Footer />
    </>
  );
}
