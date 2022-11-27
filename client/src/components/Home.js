import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const getToken = () => {
  const token = sessionStorage.getItem("sessionToken");
  return token;
};

const getDetails = async () => {
  try {
    const sessionToken = getToken();

    const sessionDetails = sessionToken.split(".");
    console.log(sessionDetails);

    var decoded = jwt_decode(sessionDetails[1]);
    console.log(decoded);

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
      {console.log(details)}
      <h1>Welcome to AlgoViz {details.email}</h1>
    </div>
  );
};

export default Home;
