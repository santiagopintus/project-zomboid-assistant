import React from "react";
import NavCard, { NavCardType } from "./NavCard/NavCard";
import s from "../styles/components/navigation-cards.module.scss";

const NavigationCards = () => {
  const options: NavCardType[] = [
    {
      id: 1,
      name: "Armas",
      image:
        "https://pzwiki.net/w/images/thumb/a/a7/PlayerAttachments.png/300px-PlayerAttachments.png",
      url: "/armas",
    },
    {
      id: 2,
      name: "Zombie",
      image: "/images/zombie.png",
    },
    {
      id: 3,
      name: "Zombie Ape",
      image: "/images/zombie-ape.png",
    },
  ];

  return (
    <div className={s.navigationCardsContainer}>
      {options.map((option) => (
        <NavCard
          key={option.id}
          id={option.id}
          image={option.image}
          name={option.name}
          url={option.url}
        />
      ))}
    </div>
  );
};

export default NavigationCards;
