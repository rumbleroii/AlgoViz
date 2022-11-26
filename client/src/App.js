import React from "react";
import { Route, Routes } from "react-router-dom";

import ReqAlgo from "./components/ReqAlgo";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element=<Login /> />
      <Route path="/home" element=<Home /> />
      <Route path="/request" element=<ReqAlgo /> />
    </Routes>
  );
};

export default App;
