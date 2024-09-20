import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function LayoutWrapper({ children }) {
  return (
    <div className="w-full">
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default LayoutWrapper;
