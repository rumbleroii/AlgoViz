import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const Faq = () => {
  const [questions, setQuestion] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:5000/api/posts")
      .then((response) => response.json())
      .then((data) => setQuestion(data));
  }

  useEffect(() => {
    fetchData();
  }, [])


  // const questions = [
  //   {
  //     question: "Test A",
  //     answer: "Test B",
  //   },
  //   {
  //     question: "Test D",
  //     answer: "Test E",
  //   },
  //   {
  //     question: "Test D",
  //     answer: "Test E",
  //   },
  //   {
  //     question: "Test D",
  //     answer: "Test E",
  //   },
  // ];


  return (
    <div>
      {questions.length > 0 ? (
        questions.map((element, index) => {
          return (
            <div class="block max-w-m p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                {element.title}
              </h5>
              <p class="font-normal text-black ">{element.body}</p>
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
