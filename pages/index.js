import React, { useState, useEffect } from "react";
import FirstView from "../components/FirestView";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* <FirstView /> */}
      <h1>home</h1>
      <Link
        as='/works/Zeit'
        href={{ pathname: "/works", query: { name: "Zeit" } }}
      >
        <a>here</a>
      </Link>
    </>
  );
};

export default Home;
