import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  HideLoading,
  SetPortfolioData,
  ShowLoading,
  ReloadData,
} from "./redux/rootSlice";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Admin/Login";
import Award from "./pages/Home/Award";
import About from "./pages/Home/About";
import Experiences from "./pages/Home/Experiences";
import Projects from "./pages/Home/Projects";
import Courses from "./pages/Home/Courses";
import Contact from "./pages/Home/Contact";
import UGProject from "./pages/Home/UGProject";
import Conference from "./pages/Home/Conference";
import Talks from "./pages/Home/Talks";
import ORActivities from "./pages/Home/ORActivities";
import Journals from "./pages/Home/Journals";
import Navbar from "./components/Navbar"; // Import the Navbar component

function App() {
  const { loading, portfolioData, reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData]);

  return (

    <BrowserRouter>
      {loading && <Loader />}
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
        <Route path="/award" element={<Award />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ugproject" element={<UGProject />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/oractivities" element={<ORActivities />} />
        <Route path="/journals" element={<Journals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
