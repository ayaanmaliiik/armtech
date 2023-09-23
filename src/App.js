import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  font-family: 'Josefin Sans', 'sans-serif';
`;

function App() {
  return (
    <AppContainer>
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <About />
        <Blogs />
        <Contact />
        <Footer />
    </AppContainer>
  );
}

export default App;
