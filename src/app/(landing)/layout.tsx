import React from "react";

import MainContainer from "../components/container";

import Header from "./components/header";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <MainContainer>{children}</MainContainer>
    </div>
  );
};

export default LandingLayout;
