import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Visualizer from "../Visualizer";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { redirect, useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

const questions = [
  {
    question: "Test A",
    answer: "Test B",
  },
  {
    question: "Test D",
    answer: "Test E",
  },
  {
    question: "Test D",
    answer: "Test E",
  },
  {
    question: "Test D",
    answer: "Test E",
  },
];

const questions = [
  {
    question: "Cannot find a desired algorithm.",
    answer: "Please submit a request for a new algorithm, by clicking the 'Request Algorithm' on the top right of the webpage.",
  },
  {
    question: "Submission Request for new algorithm is denied.",
    answer: "Please look at already existing algorithms or already exsiting requests for new algorithms by clickin on 'Requests'.",
  },
  {
    question: "How to share a particular algorithm?",
    answer: "Please click on 'Share Algorithm' on the top right of the webpage.",
  },
  {
    question: "Does this work on mobile?",
    answer: "Webpage is sutiable for all platforms including mobile.",
  },
];

const Faq = () => {
  return (
    <div>
      {questions.length > 0 ? (
        questions.map((element, index) => {
          return (
            <div class="block max-w-m p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                {element.question}
              </h5>
              <p class="font-normal text-black ">{element.answer}</p>
            </div>
          );
        })
      ) : (
        <div class="block max-w-m p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            No Questions have been asked yet.
          </h5>
        </div>
      )}
    </div>
  );
};

export default Faq;