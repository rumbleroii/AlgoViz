import { Tab } from "bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ReqAlgo = () => {
  const [details, setDetails] = useState({
    title: "",
    body: "",
    category: "",
  });

  const handleChange = (e) => {
    const newDetails = { ...details };
    if (e.target.name === "picPath") {
      newDetails[e.target.name] = e.target.files[0];
    } else {
      newDetails[e.target.name] = e.target.value;
    }
    setDetails(newDetails);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(details);
      const createPost = await axios.post(
        "http://localhost:5000/api/request/",
        details
      );

      if (createPost) {
        alert("Request Sent");
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const getToken = () => {
    const token = sessionStorage.getItem("sessionToken");
    if (!token) {
      console.log(token);
      alert("Please Login");
      navigate("/");
    }
    return token;
  };

  useEffect(() => {
    getToken();
  }, []);
  return (
    <>
      <body class="bg-blue-500">
        <nav class="relative px-4 py-4 flex justify-between items-center bg-slate-200">
          <a class="text-3xl font-bold leading-none" href="/">
            AlgoViz
          </a>
          <div class="lg:hidden">
            <button class="navbar-burger flex items-center text-blue-600 p-3">
              <svg
                class="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <a class="text-lg text-gray-400 hover:text-gray-500" href="/home">
                Home
              </a>
            </li>
          </ul>
          <a
            class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            href="/request"
          >
            Request Algorithm
          </a>
        </nav>
      </body>
      <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Request Your Algorithm
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 pb-5">
              Fill a request for an algorithm and get it on AlgoViz!
            </p>
            <div className="flex justify-center">
              <div className="createPostDiv">
                <form
                  className="createPostForm"
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <div className="field">
                    <label>Algorithm Name: </label>
                    <input
                      type="text"
                      name="title"
                      placeholder=" Enter Algorithm Name"
                      onChange={handleChange}
                    />
                  </div>
                  <hr></hr>
                  <div className="field">
                    <label>Description: </label>
                    <textarea
                      id="body"
                      name="body"
                      rows="4"
                      cols="50"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <hr></hr>
                  <div className="field">
                    <label>Category: </label>
                    <input
                      type="text"
                      name="category"
                      placeholder=" Enter Category"
                      onChange={handleChange}
                    />
                  </div>
                  <hr></hr>
                  <div className="flex items-center justify-center">
                    <input type="submit" name="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReqAlgo;
