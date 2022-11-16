import React from "react";
import MainContainer from "../components/container";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default LandingLayout;
