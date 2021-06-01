import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Body from "./Body";
import Secondbody from "./Secondbody";
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Body />
    <Secondbody />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
