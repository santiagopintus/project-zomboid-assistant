import React from "react";
import NavCard, { NavCardType } from "./NavCard/NavCard";

const NavigationCards = () => {
  const options: NavCardType[] = [
    {
      id: 1,
      name: "Weapons",
      image:
        "https://pzwiki.net/w/images/thumb/a/a7/PlayerAttachments.png/300px-PlayerAttachments.png",
      url: "/weapons",
    },
    {
      id: 2,
      name: "To do List",
      image:
        "https://pzwiki.net/w/images/thumb/b/b2/InterfaceGuide.png/350px-InterfaceGuide.png",
      url: "/to-do",
    },
    {
      id: 3,
      name: "Crafting guide",
      image:
        "https://steamuserimages-a.akamaihd.net/ugc/2051987356396626395/D98E8BA84A608CF0013FF40FD61C6EFA19F18559/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    },
  ];

  return (
    <div className={"navigation-cards-container"}>
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
