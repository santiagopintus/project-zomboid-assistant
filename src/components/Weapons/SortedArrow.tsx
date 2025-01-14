import React from "react";
import a from "./sorted-arrow.svg";
import Image from "next/image";

const SortedArrow = ({ direction }: { direction: string }) => {
  return (
    <Image
      src={a}
      alt="sorted arrow"
      width={16}
      height={16}
      style={{
        position: "absolute",
        right: 5,
        bottom: 5,
        transform: `rotate(${direction === "ascending" ? "180deg" : 0})`,
      }}
    />
  );
};

export default SortedArrow;
