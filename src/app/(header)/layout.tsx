import React from "react";
import MainContainer from "../components/container";

import "../../styles/globals.css";

const LayoutWithHeader = ({ children }: { children: React.ReactNode }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default LayoutWithHeader;
