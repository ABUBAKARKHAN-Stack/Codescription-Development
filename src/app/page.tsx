"use client";

import React from "react";
import dynamic from "next/dynamic";

const LandingPageDynamic = dynamic(() => import("@/components/pages/LandingPage"), {
  ssr: false,
  loading: () => <h1>Loading....</h1>
})

const Home = () => {
  
  return (
    <LandingPageDynamic />
  );
};

export default Home;