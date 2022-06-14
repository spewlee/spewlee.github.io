import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// Pages
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/form-success" element={<SuccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
