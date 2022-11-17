import React from "react";

import MainContainer from "../components/container";

import Header from "./components/header";

import LandingFooter from "./components/footer";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainContainer>
      <div className="flex flex-col">
        <Header />
        {children}
        <LandingFooter />
      </div>
    </MainContainer>
  );
};

export default LandingLayout;
