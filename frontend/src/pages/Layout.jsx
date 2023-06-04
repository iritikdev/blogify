import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxW={["1140px"]}>{children}</Container>
      <Footer />
    </>
  );
};
