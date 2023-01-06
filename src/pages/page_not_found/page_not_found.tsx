import React, { useState, useEffect, useMemo } from "react";

import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      {/* bg-[#1b1b1b] */}
      <div className=" fixed top-0 bottom-0 right-0 left-0 bg-[#F6F6F6] overflow-auto">
        <section className="container mx-auto flex flex-col roulette-container mb-10">
          <div className="sm:mt-32 text-center mx-auto">
            <img
              src="/assets/page-not-found.svg"
              alt=""
              width="400px"
              height="400px"
            />
            <h1 className="text-blue-500 mb-4">Page Not Found (404)</h1>
            <Link to="/">
              <a className="underline text-black hover:text-red-500">
                Return to homepage.
              </a>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
export default PageNotFound;
