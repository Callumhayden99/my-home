import Home from "./components/Home";
import Header from "./components/Header";
import Service from "./components/Service";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
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
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
