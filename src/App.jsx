import React from "react";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stack from "./components/Stack";

function App() {
  return (
    <>
      <div className='App'>
        <Intro />
        <Stack />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
