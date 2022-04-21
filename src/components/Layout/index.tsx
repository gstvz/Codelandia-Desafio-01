import React from "react";
import { Header, Main } from "@components";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};
