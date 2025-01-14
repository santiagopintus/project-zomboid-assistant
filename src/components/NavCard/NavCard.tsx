"use client";
import React from "react";
import { NavCardStyle } from "./styles";

export type NavCardType = {
  id: number;
  name: string;
  image: string;
  url?: string;
};

const NavCard = ({ id, name, image, url }: NavCardType) => {
  return (
    <NavCardStyle href={url ? url : "#"}>
      <img src={image} alt={name} />
      <label>{name}</label>
    </NavCardStyle>
  );
};

export default NavCard;
