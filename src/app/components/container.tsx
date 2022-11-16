import type { FC, PropsWithChildren } from "react";
import React from "react";

const MainContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className="mx-auto w-full max-w-[1220px] px-5">{children}</div>;
};

export default MainContainer;
