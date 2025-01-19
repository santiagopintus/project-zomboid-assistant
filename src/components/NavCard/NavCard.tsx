"use client";

import Image from "next/image";

export type NavCardType = {
  id: number;
  name: string;
  image: string;
  url?: string;
};

const NavCard = ({ name, image, url }: NavCardType) => {
  return (
    <a
      className="nav-card"
      href={url ? url : "#"}
      style={{
        display: "block",
        width: "200px",
        height: "200px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Image src={image} alt={name} layout="fill" objectFit="cover" />
      <label
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          background: "rgba(0, 0, 0, 0.5)",
          color: "white",
          width: "100%",
          textAlign: "center",
        }}
      >
        {name}
      </label>
    </a>
  );
};

export default NavCard;
