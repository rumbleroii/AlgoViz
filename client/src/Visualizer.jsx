import { get } from "jquery";
import React, { Component, useState } from "react";
import TextLoop from "react-text-loop";
import PathFindingVisualizer from "./PathFindingVisualizer/PathFindingVisualizer";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
import Faq from "./components/Faq";
import "./Visualizer.css";

import jwt_decode from "jwt-decode";

const getToken = () => {
  const token = sessionStorage.getItem("sessionToken");
  return token;
};

export default class Visualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "main",
      rendering: false,
      algorithms: [],
      currentAlgorithm: null,
      goFunction: () => {},
      resetFunction: () => {},
      setAlgorithm: () => {},
      sortingClicked: false,
      pathClicked: false,
      AIClicked: false,
      aicount: 0,
      details: {},
    };
    this.getFunctions = this.getFunctions.bind(this);
    this.changeRenderingState = this.changeRenderingState.bind(this);
  }

  componentDidMount() {
    const token = getToken();
    const decoded = jwt_decode(token);
    this.setState({ details: decoded });
  }

  changeRenderingState(rendering) {
    this.setState({ rendering: rendering });
  }

  getFunctions(go, reset, setAlgo, algorithms) {
    this.state.goFunction = go;
    this.state.resetFunction = reset;
    this.state.setAlgorithm = setAlgo;
    this.state.algorithms = algorithms;
    this.setState({ algorithms: algorithms });
  }

  render() {
    let renderObj = null;
    if (this.state.mode === "pathfinding") {
      renderObj = (
        <div className="container mx-auto">
          <PathFindingVisualizer
            setVisualizerRendering={this.changeRenderingState}
            getFunctions={this.getFunctions}
          />
        </div>
      );
    } else if (this.state.mode === "sorting") {
      renderObj = (
        <div className="container mx-auto">
          <SortingVisualizer
            setVisualizerRendering={this.changeRenderingState}
            getFunctions={this.getFunctions}
          />
        </div>
      );
    } else if (this.state.mode === "faq") {
      renderObj = (
        <div class="welbotron">
          <div class="container welc">
            <h1 class="welcome">Frequently Asked Questions (FAQ)</h1>
            <Faq />
          </div>
        </div>
      );
    } else {
      renderObj = (
        <div class="welbotron">
          <div class="container welc">
            <h1 class="welcome">
              Hello, {this.state.details.name}.
              <p class="lead">
                AlgoViz helps you understand algorithms better by visualizing
                them.
              </p>
              <p class="secondline lead">
                Click on one of the categories below to visualize algorithms.
              </p>
            </h1>
            <a
              href="#"
              class="mainpage-b"
              onClick={() => {
                if (!this.state.rendering) {
                  this.setState({ mode: "pathfinding" });
                  this.setState({ currentAlgorithm: null, pathClicked: true });
                }
              }}
              data-toggle={this.state.pathClicked ? "" : "modal"}
              data-target="#pathIntroModal"
            >
              <span></span>
              PATH FINDING
            </a>
            <a
              href="#"
              class="mainpage-b"
              onClick={() => {
                if (!this.state.rendering) {
                  this.setState({
                    mode: "sorting",
                    currentAlgorithm: null,
                    sortingClicked: true,
                  });
                }
              }}
              data-toggle={this.state.sortingClicked ? "" : "modal"}
              data-target="#sortingIntroModal"
            >
              <span></span>
              SORTING
            </a>
          </div>
        </div>
      );
    }
    let invisibleOrNot = "";
    if (this.state.mode === "main" || this.state.mode === "faq")
      invisibleOrNot = " invisible";
    let algorithms = this.state.algorithms;
    return (
      <>
        <nav class="relative px-4 py-4 flex justify-between items-center bg-slate-200">
          <a class="text-3xl font-bold leading-none pr-10" href="/">
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
            <li>
              <a
                href="#"
                class="text-lg text-gray-400 hover:text-gray-500"
                onClick={() => {
                  if (!this.state.rendering) {
                    this.setState({
                      mode: "faq",
                    });
                  }
                }}
              >
                FAQ
              </a>
            </li>
          </ul>
          <div class={"dropdown" + invisibleOrNot}>
            <button
              class="btn btn-danger dropdown-toggle navbtn"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              disabled={this.state.rendering}
            >
              {this.state.currentAlgorithm == null
                ? "Algorithms"
                : this.state.currentAlgorithm}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                {algorithms.map((algorithm, algoId) => {
                  return (
                    <button
                      type="button"
                      class="btn btn-light navbtn"
                      onClick={() => {
                        this.state.setAlgorithm(algoId);
                        this.setState({
                          currentAlgorithm: this.state.algorithms[algoId],
                        });
                      }}
                    >
                      {algorithm}
                    </button>
                  );
                })}
              </li>
            </div>
          </div>

          <div class={"dropdown" + invisibleOrNot}>
            <button
              class="btn btn-outline-success dropdown-toggle navbtn"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              disabled={this.state.rendering}
            >
              Actions
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <button
                  type="button"
                  class="btn btn-light navbtn"
                  onClick={() => this.state.goFunction()}
                  data-toggle={
                    this.state.currentAlgorithm === null ? "modal" : ""
                  }
                  data-target="#setAlgoModal"
                  disabled={
                    this.state.mode === "ai" &&
                    this.state.currentAlgorithm === "Minimax"
                  }
                >
                  Go!
                </button>
                <button
                  type="button"
                  class="btn btn-light navbtn"
                  onClick={() => this.state.resetFunction()}
                >
                  Reset
                </button>
              </li>
            </div>
          </div>
          <a
            class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            href="/request"
          >
            Request Algorithm
          </a>
        </nav>

        <div class="modal fade" id="setAlgoModal" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">No Algorithm Selected</h5>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body-alert">
                <p>Please select an algorithm first.</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-dismiss="modal"
                  style={{ width: "100px" }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="pathIntroModal" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content intro">
              <div class="modal-header">
                <h5 class="modal-title">Pathfinding</h5>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body intro">
                <p>
                  Pathfinding is generally the process of finding a route
                  between two points. It is closely related to the shortest path
                  problem in graph theory, which examines how to identify the
                  "best" paths valued by different criteria (Ex. distance, cost,
                  time consumption).
                </p>
                <p>
                  Pathfinding is also similar to Searching in some
                  circumstances. For instance, we can use [breadth-first search]
                  to find the shortest path in a grid world.
                </p>
                <p>
                  In our scenario, the paths are valued by the number of cells
                  they passed from START:
                  <div class="simg" width="20" height="20"></div>
                  to the TARGET:
                  <div class="fimg" width="20" height="20"></div>.
                </p>
                <p>
                  You may drag the START and TARGET icons to change their
                  positions, and click on the blank nodes to add Walls.
                </p>

                <p>Now please choose a sorting algorithm and visualize it!</p>
                <p class="tips">
                  (after choosing an algorithm, click on the [Actions] button.)
                </p>
                <br />
                <p class="tips">
                  Note: there could be multiple "best" paths, so paths generated
                  by different algorithms may not be consistent.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-dismiss="modal"
                  style={{ width: "100px" }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="sortingIntroModal" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content intro">
              <div class="modal-header">
                <h5 class="modal-title">Sorting</h5>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body intro">
                <p>
                  Sorting is a process of arranging an ordered sequence. It is a
                  common operation in many applications.
                </p>
                <p>
                  Common uses of sorted sequences are:
                  <div class="uses-list">
                    <p>·lookup or search efficiently</p>
                    <p>·merge sequences efficiently</p>
                    <p>·process data in a defined order</p>
                  </div>
                  Now please choose a sorting algorithm and visualize it!
                </p>
                <p class="tips">
                  (after choosing an algorithm, click on the [Actions] button.)
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-dismiss="modal"
                  style={{ width: "100px" }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>{renderObj}</div>
      </>
    );
  }
}
