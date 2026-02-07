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
