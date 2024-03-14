import Home from "./components/Home";
import Header from "./components/Header";
import Service from "./components/Service";
import Contact from "./components/Contact";
import About from "./components/About";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import HouseDetails from "./components/HouseDetails";
import SignIn from "./components/SignIn";
import CreateHome from "./components/CreateHome";
import EditHome from "./components/EditHome";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/houses"
          element={
            <>
              <Header />
              <Filter />
              <Footer />
            </>
          }
        />
         <Route path="/homes/:id" element={<HouseDetails />} />
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
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/admin/create-home" element={<CreateHome />} />
<Route path="/admin/edit-home/:id" element={<EditHome />} />
      </Routes>
    </>
  );
}

export default App;
