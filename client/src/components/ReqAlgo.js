import { Tab } from "bootstrap";
import React from "react";

const ReqAlgo = () => {
  const handleChange = () => {
    return 0;
  };

  const handleSubmit = () => {
    return 0;
  };
  return (
    <>
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
                  encType="multipart/form-data"
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
                      name="duration"
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
