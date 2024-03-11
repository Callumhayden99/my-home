import Home from "./components/Home";
import Header from "./components/Header";
import Service from "./components/Service";
import Contact from "./components/Contact";
import About from "./components/About";
import Houses from "./components/Houses";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <>
      <Routes>
      <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/houses"
          element={
            <>
              <Header />
              <Houses />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Header />
              <Service />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About/>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
