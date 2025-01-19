import React from "react";
import spinnerIcon from "@/icons/spinner.svg";
import Image from "next/image";

const Loading = () => {
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <Image
        src={spinnerIcon}
        alt="loading"
        width={200}
        height={200}
        style={{ display: "block", margin: "0 auto" }}
      />
    </div>
  );
};

export default Loading;
