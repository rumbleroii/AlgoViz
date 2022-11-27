import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Visualizer from "../Visualizer";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import jwt_decode from "jwt-decode";

const getToken = () => {
  const token = sessionStorage.getItem("sessionToken");
  return token;
};

const getDetails = async () => {
  try {
    const sessionToken = getToken();

    const decoded = jwt_decode(sessionToken);

    console.log(decoded);

    // const res = await axios.get(
    //   "https://www.googleapis.com/oauth2/v1/tokeninfo",
    //   {
    //     params: { id_token: `${sessionToken}` },
    //   }
    // );

    // console.log(res);

    // return res.data;
  } catch (err) {
    console.log(err);
  }
};

const Home = () => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    getDetails().then((res) => setDetails(res));
  }, []);

  return (
    <div className="container-md mx-auto">
      <Visualizer></Visualizer>
    </div>
  );
};

export default Home;