import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Visualizer from "../Visualizer";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { redirect, useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

const Home = () => {
  const [details, setDetails] = useState({});

  const navigate = useNavigate();

  const getToken = () => {
    const token = sessionStorage.getItem("sessionToken");
    if (!token) {
      alert("Please Login");
      navigate("/");
    }
    return token;
  };

  const getDetails = async () => {
    const sessionToken = getToken();

    if (!sessionToken) {
      navigate("/");
      return;
    } else {
      const decoded = jwt_decode(sessionToken);
      return decoded;
    }
  };

  useEffect(() => {
    const decodedInfo = getDetails();
    setDetails(decodedInfo);
  }, []);

  return (
    <>
      <div>
        <Visualizer></Visualizer>
      </div>
    </>
  );
};

export default Home;
