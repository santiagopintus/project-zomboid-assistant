"use client";

export type NavCardType = {
  id: number;
  name: string;
  image: string;
  url?: string;
};

const NavCard = ({ id, name, image, url }: NavCardType) => {
  return (
    <a className="nav-card" href={url ? url : "#"}>
      <img src={image} alt={name} />
      <label>{name}</label>
    </a>
  );
};

export default NavCard;
