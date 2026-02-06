import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollTopBtn from "./components/ScrollTopBtn";
import Top from "./components/Top";
import NotFound from "./components/NotFound";
import PageTitle from "./components/PageTitle";

import Home from "./pages/Home/Home";
// import DoctorsTimetable from "./pages/DoctorsTimetable/DoctorsTimetable";
// import About from "./pages/About/About";
// import Packages from "./pages/Packages/Packages";
// import PackagesDetails from "./pages/PackagesDetails/PackagesDetails";
// import Service from "./pages/Service/Service";
// import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
// import Doctors from "./pages/Doctors/Doctors";
// import DoctorDetails from "./pages/DoctorDetails/DoctorDetails";
// import Gallery from "./pages/Gallery/Gallery";
// import Blog from "./pages/Blog/Blog";
// import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Contact from "./pages/Contact/Contact";
// import Appointment from "./pages/Appointment/Appointment";
// import AppointmentDoctor from "./pages/AppointmentDoctor/AppointmentDoctor";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // loader duration

    return () => clearTimeout(timer);
  }, []);

  // 🔹 Show loader ONLY
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="">
      <BrowserRouter>
        <div className="wrapper">
          <Header
            toggleMenu={toggleMenu}
            closeMenu={closeMenu}
            menuOpen={menuOpen}
          />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <PageTitle title={"Home"} />
                  <Home />
                </>
              }
            ></Route>

            {/* <Route
              path="/time-table"
              element={
                <>
                  <PageTitle title={"TIME TABLE"} />
                  <DoctorsTimetable />
                </>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <>
                  <PageTitle title={"ABOUT US"} />
                  <About />
                </>
              }
            ></Route> */}

            {/* <Route
              path="/packages"
              element={
                <>
                  <PageTitle title={"PACKAGES"} />
                  <Packages />
                </>
              }
            ></Route>
            <Route
              path="/packages/package-details/:id"
              element={
                <>
                  <PageTitle title={"PACKAGE DETAILS"} />
                  <PackagesDetails />
                </>
              }
            ></Route> */}

            {/* <Route
              path="/services"
              element={
                <>
                  <PageTitle title={"SERVICES"} />
                  <Service />
                </>
              }
            ></Route> */}

            {/* <Route
              path="/services/service-details"
              element={
                <>
                  <PageTitle title={"SERVICE DETAILS"} />
                  <ServiceDetails />
                </>
              }
            ></Route> */}

            {/* <Route
              path="/doctors"
              element={
                <>
                  <PageTitle title={"OUR CONSULTANTS"} />
                  <Doctors />
                </>
              }
            ></Route>
            <Route
              path="/doctors/doctor-details"
              element={
                <>
                  <PageTitle title={"CONSULTANT DETAILS"} />
                  <DoctorDetails />
                </>
              }
            ></Route> */}

            {/* <Route
              path="/gallery"
              element={
                <>
                  <PageTitle title={"GALLERY"} />
                  <Gallery />
                </>
              }
            ></Route> */}

            {/* <Route
              path="/blog"
              element={
                <>
                  <PageTitle title={"BLOGS"} />
                  <Blog />
                </>
              }
            ></Route>
            <Route
              path="/blog/blog-details/:id"
              element={
                <>
                  <PageTitle title={"BLOG DETAILS"} />
                  <BlogDetails />
                </>
              }
            ></Route> */}

            <Route
              path="/contact"
              element={
                <>
                  <PageTitle title={"CONTACT US"} />
                  <Contact />
                </>
              }
            ></Route>

            {/* <Route
              path="/appointment"
              element={
                <>
                  <PageTitle title={"APPOINTMENT"} />
                  <Appointment />
                </>
              }
            ></Route> */}
            
            {/* <Route
              path="/appointment-doctor/:id"
              element={
                <>
                  <PageTitle title={"APPOINTMENT"} />
                  <AppointmentDoctor />
                </>
              }
            ></Route> */}

            <Route
              path="*"
              element={
                <>
                  <PageTitle title={"NOT FOUND"} />
                  <NotFound />
                </>
              }
            ></Route>
          </Routes>

          <Footer />
          <Top />
          <ScrollTopBtn />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
