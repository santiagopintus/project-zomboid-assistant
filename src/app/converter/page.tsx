import Converter from "@/components/Converter/Converter";
import React from "react";

const page = () => {
  return (
    <div className="container">
      <h1>Enter a table element to transform to json array</h1>
      <Converter />
    </div>
  );
};

export default page;
